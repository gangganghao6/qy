import { Skeleton } from "antd";
import React, { memo, useContext } from "react";

import { loadingContext } from "../App";

export default memo(function () {
  let { loading } = useContext(loadingContext);
  return (
    <>
      <Skeleton loading={loading} active />
      <Skeleton loading={loading} active />
    </>
  );
});
