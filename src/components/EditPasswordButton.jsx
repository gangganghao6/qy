import { Button, message } from "antd";
import { memo, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import EditPassword from "./EditPassword";

export default memo(function ({ editVisible, setEditVisible }) {
  let navigate = useNavigate();
  const onEdit = (values) => {
    console.log(values);
    message.success("修改成功");
    setEditVisible(false);
    navigate("/userInfo");
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setEditVisible(true);
        }}
        ghost
        style={{ marginRight: "12px" }}
      >
        修改密码
      </Button>
      <EditPassword
        visible={editVisible}
        onEdit={onEdit}
        onCancel={() => {
          setEditVisible(false);
        }}
      />
    </div>
  );
});
