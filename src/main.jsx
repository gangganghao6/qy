import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider, DatePicker, message } from "antd";
import { BrowserRouter } from "react-router-dom";
// import useMockServer from "./util/useMockServer";

// useMockServer();
ReactDOM.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
