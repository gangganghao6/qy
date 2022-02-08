import { Descriptions, Badge, Button, Space } from "antd";
import EditPasswordButton from "./EditPasswordButton";
import { useState } from "react";

export default function () {
  let [editVisible, setEditVisible] = useState(false);
  return (
    <>
      <Descriptions title="用户信息" bordered column={1}>
        <Descriptions.Item label="账号">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="邮箱">Prepaid</Descriptions.Item>
        <Descriptions.Item label="公司名称">YES</Descriptions.Item>
        <Descriptions.Item label="注册时间">2018-04-24 18:00:00</Descriptions.Item>
      </Descriptions>
      <Space style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>
        <EditPasswordButton editVisible={editVisible} setEditVisible={setEditVisible} />
      </Space>
    </>
  );
}
