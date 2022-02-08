import { useRoutes, Routes, Outlet, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import EditQyData from "../components/EditQyData";
// import Flv from "../components/Flv";
// import MyTable from "../components/MyTable";
// import MyInfiniteList from "../components/MyInfiniteList";

let AllRoutes = () => {
  const MyTable = lazy(() => import("../components/MyTable"));
  const MyList = lazy(() => import("../components/MyList"));
  const MyInfiniteList = lazy(() => import("../components/MyInfiniteList"));
  const Flv = lazy(() => import("../components/Flv"));
  const EditQyData = lazy(() => import("../components/EditQyData"));
  return useRoutes([
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/qylist",
          element: <Suspense fallback={<></>}>{<MyTable />}</Suspense>,
        },
        {
          path: "/userInfo",
          element: <Suspense fallback={<></>}>{<MyList />}</Suspense>,
        },
        {
          path: "/infinitelist",
          element: <Suspense fallback={<></>}>{<MyInfiniteList />}</Suspense>,
        },
        {
          path: "/flv",
          element: <Suspense fallback={<></>}>{<Flv />}</Suspense>,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/qylist" />,
    },
  ]);
};
export default function GetRoutes() {
  return <AllRoutes />;
}
