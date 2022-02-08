import React, { createContext, memo, useCallback, useEffect, useState } from "react";
import { Modal, Button, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import TimeSelect from "./TimeSelect";
import NumberSelect from "./NumberSelect";

export default memo(function (props) {
  // let location = useLocation();
  // let {state = undefined} = location;
  let navigate = useNavigate();
  let { record, setIsShow } = props;
  let [time, setTime] = useState(record.time);
  let [coordinate, setCoordinate] = useState({ x: record.x, y: record.y });

  setTime = useCallback(setTime, [time]);
  setCoordinate = useCallback(setCoordinate, [coordinate]);
  const handleOk = () => {
    setIsShow(false);
    message.info("修改成功");
    navigate("/table", { replace: true });
  };

  const handleCancel = () => {
    message.success("您取消了修改");
    setIsShow(false);
  };

  return (
    <>
      <Modal title="编辑数据" visible={true} onOk={handleOk} onCancel={handleCancel}>
        <p> ID : {record.id}</p>
        <p>
          时间 : <TimeSelect time={time} setTime={setTime} />
        </p>
        <p>
          坐标 : <NumberSelect coordinate={coordinate} setCoordinate={setCoordinate} />
        </p>
      </Modal>
    </>
  );
});
