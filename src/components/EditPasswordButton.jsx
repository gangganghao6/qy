import { Button, message } from "antd";
import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditPassword from "./EditPassword";
import { loadingContext } from "../App";
import { requestEditUserPassword } from "../util/request.js";

export default memo(function ({ editVisible, setEditVisible }) {
  let navigate = useNavigate();
  let { setCenterLoading } = useContext(loadingContext);
  const onEdit = async ({ oldPassword, newPassword }) => {
    setCenterLoading(true);
    let data = await requestEditUserPassword(oldPassword, newPassword);
    if (data.status === "success") {
      setCenterLoading(false);
      message.success("修改成功");
      setEditVisible(false);
      navigate("/userInfo");
    } else {
      setCenterLoading(false);
      message.error(data.msg);
    }
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
