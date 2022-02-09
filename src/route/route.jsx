import { useRoutes, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "../components/Index";
import NotFount from "../components/NotFount";
import { menus } from "../components/menuList";

let AllRoutes = ({ setKey }) => {
  const MyTable = lazy(() => import("../components/MyTable"));
  const MyList = lazy(() => import("../components/MyList"));
  const MyInfiniteList = lazy(() => import("../components/MyInfiniteList"));
  const Flv = lazy(() => import("../components/Flv"));
  const location = useLocation();
  let login = localStorage.getItem("login");
  menus.forEach((menu) => {
    if ("/" + menu.path === location.pathname) {
      setKey(menu.id);
    }
  });
  if (login === "false" || login === null) {
    return useRoutes([
      {
        path: "/index",
        element: <Index />,
      },
      {
        path: "/notfound",
        element: <NotFount />,
      },
      {
        path: "*",
        element: <Navigate to="/notfound" />,
      },
    ]);
  }
  return useRoutes([
    {
      path: "/index",
      element: <Index />,
    },
    {
      path: "/qylist",
      element: <Suspense fallback={<></>}>{<MyTable />}</Suspense>,
    },
    {
      path: "/userInfo",
      element: <Suspense fallback={<></>}>{<MyList />}</Suspense>,
    },
    {
      path: "/log",
      element: <Suspense fallback={<></>}>{<MyInfiniteList />}</Suspense>,
    },
    {
      path: "/flv",
      element: <Suspense fallback={<></>}>{<Flv />}</Suspense>,
    },
    {
      path: "*",
      element: <Navigate to="/index" />,
    },
  ]);
};
export default function GetRoutes({ setKey }) {
  return <AllRoutes setKey={setKey} />;
}
