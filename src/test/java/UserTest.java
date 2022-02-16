import com.Gavin.bean.Machinedata;
import com.Gavin.bean.User;
import com.Gavin.config.SpringConfig;
import com.Gavin.mapper.QyMapper;
import com.Gavin.mapper.UserMapper;
import com.Gavin.service.QyService;
import com.Gavin.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class UserTest {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private QyService qyService;

    @Autowired
    private UserService userService;

    @Test
    public void fun1(){
        User user=new User("9","9","9","9","9","9");
        userMapper.addUser(user);
    }

    @Test
    public void fun2(){
        userService.updateUserByAccount("gavin","1234");
    }
}
