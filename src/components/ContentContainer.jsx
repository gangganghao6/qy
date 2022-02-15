import React, {memo, useContext, useState} from "react";

import {Layout, Menu} from "antd";

import MyMenu from "./MyMenu";

const {Sider, Content} = Layout;
import Loading from "./Loading";
import MyHeader from "./MyHeader";
import {menus} from "./menuList";
import AllRoutes from "../route/route";

export default memo(function Test(props) {
    let [current, setCurrent] = useState("1");
    let [theme, setTheme] = useState("light");
    let [color, setColor] = useState("#2c2c2c");

    function setKey(key) {
        setCurrent(key);
    }

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
        setColor(color === "#2c2c2c" ? "#e6e6e6" : "#2c2c2c");
    }

    return (
        <Layout style={{minHeight: "100%"}}>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                theme={theme}
            >
                <div className="logo">
                    <div className={'logobox'} style={{textAlign: "center", verticalAlign: 'center'}}>
                        <h1 style={{fontSize: '20px', fontWeight: 800, color}}>豫到好粮管理系统</h1>
                    </div>
                </div>
                <Menu theme={theme} mode="inline" selectedKeys={[current]}>
                    {menus.map((value, index) => {
                        return <MyMenu data={value} key={value.id}/>;
                    })}
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{marginLeft: 200}}>
                <MyHeader toggleTheme={toggleTheme}/>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 10,
                    }}
                >
                    <AllRoutes setKey={setKey}/>
                    <Loading/>
                </Content>
            </Layout>
        </Layout>
    );
});
