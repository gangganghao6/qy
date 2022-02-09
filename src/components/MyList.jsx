import { Descriptions, Space, message } from "antd";
import EditPasswordButton from "./EditPasswordButton";
import { useContext, useEffect, useState } from "react";
import { requestUserInfo } from "../util/request.js";
import { loadingContext } from "../App";

export default function () {
  let [editVisible, setEditVisible] = useState(false);
  let [user, setUser] = useState({});
  let { setCenterLoading } = useContext(loadingContext);

  async function getUserInfo() {
    setCenterLoading(true);
    let userObj = JSON.parse(localStorage.getItem("user"));
    let data = await requestUserInfo(userObj.account);
    if (data.status === "success") {
      localStorage.setItem("user", JSON.parse(data.user));
      setUser(data.user);
      setCenterLoading(false);
    } else {
      setCenterLoading(false);
      message.error(data.msg);
    }
  }

  useEffect(() => {
    getUserInfo().then();
    // setUser(JSON.parse(localStorage.getItem('user')))
  }, []);

  return (
    <>
      <Descriptions title="用户信息" bordered column={1}>
        <Descriptions.Item label="账号">{user.account}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
        <Descriptions.Item label="公司名称">{user.companyName}</Descriptions.Item>
        <Descriptions.Item label="注册时间">{user.time}</Descriptions.Item>
      </Descriptions>
      <Space style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>
        <EditPasswordButton editVisible={editVisible} setEditVisible={setEditVisible} />
      </Space>
    </>
  );
}
