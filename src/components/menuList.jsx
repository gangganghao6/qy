import {
  AlignLeftOutlined,
  BankOutlined,
  BarChartOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

export let menus = [
  {
    path: "index",
    title: "首页",
    id: "0",
    icon: <BankOutlined />,
  },
  {
    path: "qylist",
    title: "扦样记录",
    id: "1",
    icon: <BarChartOutlined />,
  },
  {
    path: "log",
    title: "操作记录",
    id: "2",
    icon: <AlignLeftOutlined />,
  },
  {
    path: "flv",
    title: "扦样实况",
    id: "3",
    icon: <VideoCameraOutlined />,
  },

  {
    path: "userInfo",
    title: "我的信息",
    id: "4",
    icon: <UserOutlined />,
  },
];
