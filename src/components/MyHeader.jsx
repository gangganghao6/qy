import { Header } from "antd/es/layout/layout";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import React, { useContext, useState } from "react";
import { loginContext } from "../App";

export default function () {
  let { login, setLogin } = useContext(loginContext);
  let [loginVisible, setLoginVisible] = useState(false);
  let [registerVisible, setRegisterVisible] = useState(false);

  let loginAndOutButtonTemplate = login ? (
    <LogoutButton login={login} setLogin={setLogin} />
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
    </>
  );
  return (
    <Header
      className="site-layout-background"
      style={{
        display: "flex",
        alignItems: "stretch",
        flexDirection: "row-reverse",
      }}
    >
      {loginAndOutButtonTemplate}
    </Header>
  );
}
