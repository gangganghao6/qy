import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function () {
  let navigate = useNavigate();
  function back() {
    navigate("/index");
  }
  return (
    <Result
      status="403"
      title="403"
      subTitle="你没有权限访问该页面，请先登录."
      extra={
        <Button type="primary" onClick={back}>
          返回主页
        </Button>
      }
    />
  );
}
