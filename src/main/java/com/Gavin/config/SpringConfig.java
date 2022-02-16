package com.Gavin.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.logging.log4j.Log4jImpl;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.Properties;

@Configuration      //声明配置类
@ComponentScan("com.Gavin") //IOC注解扫描
@EnableTransactionManagement    //开启事务管理器
@EnableAspectJAutoProxy         //aop注解管理器
public class SpringConfig {
    @Bean
    public DataSource dataSource() throws IOException {     //加载数据源
        DruidDataSource dataSource=new DruidDataSource();
        Properties properties=new Properties();
        properties.load(SpringConfig.class.getClassLoader().getResourceAsStream("druid.properties"));
        dataSource.setUsername("root");
        dataSource.setPassword("root");
        dataSource.setUrl("jdbc:mysql://39.105.105.42:3306/machine");
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        return dataSource;
    }

    @Bean("sessionFactory")             //配置sqlsessionFactory
    public SqlSessionFactoryBean sqlSessionFactoryBean() throws IOException {
        SqlSessionFactoryBean sessionFactoryBean=new SqlSessionFactoryBean();
        sessionFactoryBean.setDataSource(dataSource());
        //set后直接使用类名即可  前面不需要再加包名
        sessionFactoryBean.setTypeAliasesPackage("com.Gavin.bean");
        org.apache.ibatis.session.Configuration configuration = new org.apache.ibatis.session.Configuration();
        configuration.setMapUnderscoreToCamelCase(true);
        configuration.setLogImpl(Log4jImpl.class);
        sessionFactoryBean.setConfiguration(configuration);
        return sessionFactoryBean;
    }

    //mapper配置扫描
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer configurer=new MapperScannerConfigurer();
        configurer.setBasePackage("com.Gavin.mapper");
        configurer.setSqlSessionFactoryBeanName("sessionFactory");
        return configurer;
    }

    //事务管理器
    @Bean
    public TransactionManager transactionManager() throws IOException {
        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
        transactionManager.setDataSource(dataSource());
        return transactionManager;
    }
}
