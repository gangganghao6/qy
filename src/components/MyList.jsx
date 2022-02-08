import { Descriptions, Badge } from "antd";

export default function () {
  return (
    <Descriptions title="用户信息" bordered column={1}>
      <Descriptions.Item label="账号">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="邮箱">Prepaid</Descriptions.Item>
      <Descriptions.Item label="公司名称">YES</Descriptions.Item>
      <Descriptions.Item label="注册时间">2018-04-24 18:00:00</Descriptions.Item>
    </Descriptions>
  );
}
