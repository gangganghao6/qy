import {Header} from "antd/es/layout/layout";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import React, {useContext, useState} from "react";
import {loginContext} from "../App";
import {Switch} from "antd";

export default function ({toggleTheme}) {
    let {login, setLogin} = useContext(loginContext);
    let [loginVisible, setLoginVisible] = useState(false);
    let [registerVisible, setRegisterVisible] = useState(false);

    let loginAndOutButtonTemplate = login ? (
        <>
            <LogoutButton login={login} setLogin={setLogin}/>
            {/*<Switch defaultChecked style={{marginRight:'10px'}} onChange={toggleTheme}/>*/}
        </>

    ) : (
        <>
            <RegisterButton
                registerVisible={registerVisible}
                setRegisterVisible={setRegisterVisible}
                setLoginVisible={setLoginVisible}
            />
            <LoginButton
                loginVisible={loginVisible}
                setLoginVisible={setLoginVisible}
                setRegisterVisible={setRegisterVisible}
                setLogin={setLogin}
            />
            {/*<Switch defaultChecked style={{marginRight:'10px'}}/>*/}
        </>
    );
    return (
        <Header
            className="site-layout-background"
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
            }}
        >
            {loginAndOutButtonTemplate}
            <Switch defaultChecked style={{marginRight:'10px'}} onChange={toggleTheme}/>
            切换主题：
        </Header>
    );
}
