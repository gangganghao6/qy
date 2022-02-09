import { Button, message } from "antd";
import { useContext } from "react";
import Register from "./Register";
import { requestUserRegister } from "../util/request";
import { loadingContext } from "../App";

export default function ({ registerVisible, setRegisterVisible, setLoginVisible }) {
  let { setCenterLoading } = useContext(loadingContext);
  const onRegister = async (values) => {
    setCenterLoading(true);
    let data = await requestUserRegister(values);
    if (data.status === "success") {
      message.success("注册成功");
      setRegisterVisible(false);
      setLoginVisible(true);
      setCenterLoading(false);
    } else {
      setCenterLoading(false);
      message.error(data.msg);
    }
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
