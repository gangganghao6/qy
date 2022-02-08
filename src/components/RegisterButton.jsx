import { Button, message } from "antd";
import { useState } from "react";
import Register from "./Register";

export default function ({ registerVisible, setRegisterVisible, setLoginVisible }) {
  // const [visible, setVisible] = useState( false);
  const onRegister = (values) => {
    message.success("注册成功");
    setRegisterVisible(false);
    setLoginVisible(true);
  };
  function toLogin() {
    setRegisterVisible(false);
    setLoginVisible(true);
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setRegisterVisible(true);
        }}
        ghost
      >
        注册
      </Button>
      <Register
        visible={registerVisible}
        onRegister={onRegister}
        onCancel={() => {
          setRegisterVisible(false);
        }}
        toLogin={toLogin}
      />
    </div>
  );
}
