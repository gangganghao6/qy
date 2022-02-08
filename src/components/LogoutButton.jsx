import { Button, message, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

export default memo(function ({ login, setLogin }) {
  let navigate = useNavigate();

  function logout() {
    message.success("已注销");
    setLogin(!login);
    navigate("/qylist");
  }

  return (
    <div>
      <Popconfirm
        title="你确定要注销吗?"
        onConfirm={logout}
        // onCancel={}
        okText="确认"
        cancelText="取消"
      >
        {/*<a href="#">Delete</a>*/}
        <Button type="primary" ghost>
          注销
        </Button>
      </Popconfirm>
    </div>
  );
});
