import { Button, message } from "antd";
import { memo, useContext, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { requestUserLogin } from "../util/request";
import { loadingContext } from "../App";

export default memo(function ({ loginVisible, setLoginVisible, setRegisterVisible, setLogin }) {
  let navigate = useNavigate();
  let { setCenterLoading } = useContext(loadingContext);
  const onLogin = async (values) => {
    // setCenterLoading(true)
    // let result = await requestUserLogin(values);
    // if (result.data.status === 'success') {
    //     localStorage.setItem("login", "true");
    //     localStorage.setItem('user', JSON.stringify(data.user))
    //     message.success("登录成功");
    //     setLogin(true);
    //     setLoginVisible(false);
    //     setCenterLoading(false)
    //     navigate("/index");
    // } else {
    //     setCenterLoading(false)
    //     message.error(result.data.msg);
    // }
    localStorage.setItem(
      "user",
      JSON.stringify({
        account: "123",
        email: "530394623@qq.com",
        companyName: "456",
        time: "2022-01-05 11:45:26",
      })
    );
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
