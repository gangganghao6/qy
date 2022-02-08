// import {icons} from "antd/es/image/PreviewGroup";
import React, { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { Layout, Menu, Skeleton } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import GetRoutes from "../route/route";
import MyMenu from "./MyMenu";

const { Header, Sider, Content } = Layout;
import "./trigger.css";
import Loading from "./Loading";
import MyHeader from "./MyHeader";

export default memo(function Test(props) {
  let [current, setCurrent] = useState("1");

  setCurrent = useCallback(setCurrent, [current]);

  function setKey(key) {
    return function () {
      setCurrent(key);
    };
  }

  let menus = [
    {
      path: "qylist",
      title: "扦样记录",
      id: "1",
      icon: <VideoCameraOutlined />,
    },
    {
      path: "flv",
      title: "扦样实况",
      id: "2",
      icon: <VideoCameraOutlined />,
    },
    {
      path: "userinfo",
      title: "我的信息",
      id: "3",
      icon: <UserOutlined />,
    },
    {
      path: "infinitelist",
      title: "动态加载列表",
      id: "4",
      icon: <UserOutlined />,
    },
  ];
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} selectedKeys={[current]}>
          {menus.map((value, index) => {
            return <MyMenu data={value} key={value.id} setKey={setKey} />;
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <MyHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 10,
            // minHeight: '100%',
          }}
        >
          <GetRoutes />
          <Loading />
        </Content>
      </Layout>
    </Layout>
  );
});
