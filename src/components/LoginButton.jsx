import { Button, message } from "antd";
import { memo, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default memo(function ({ loginVisible, setLoginVisible, setRegisterVisible, setLogin }) {
  let navigate = useNavigate();
  const onLogin = (values) => {
    localStorage.setItem("login", "true");
    message.success("登录成功");
    setLogin(true);
    setLoginVisible(false);
    navigate("/index");
  };

  function toRegister() {
    setLoginVisible(false);
    setRegisterVisible(true);
  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setLoginVisible(true);
        }}
        ghost
        style={{ marginRight: "12px" }}
      >
        登录
      </Button>
      <Login
        visible={loginVisible}
        onLogin={onLogin}
        onCancel={() => {
          setLoginVisible(false);
        }}
        toRegister={toRegister}
      />
    </div>
  );
});
