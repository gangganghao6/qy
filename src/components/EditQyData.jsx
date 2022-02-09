import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import { Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import TimeSelect from "./TimeSelect";
import NumberSelect from "./NumberSelect";
import { loadingContext } from "../App";
import { requestEditQyData } from "../util/request";

export default memo(function (props) {
  let navigate = useNavigate();
  let { record, setIsShow } = props;
  let [time, setTime] = useState(record.time);
  let [coordinate, setCoordinate] = useState({ x: record.x, y: record.y });
  let { setCenterLoading } = useContext(loadingContext);

  setTime = useCallback(setTime, [time]);
  setCoordinate = useCallback(setCoordinate, [coordinate]);
  const handleOk = async () => {
    setCenterLoading(true);
    let data = await requestEditQyData({ id: record.id, time, ...coordinate });
    if (data.status === "success") {
      setCenterLoading(false);
      message.info("修改成功");
      setIsShow(false);
      navigate("/qylist", { replace: true });
    } else {
      setCenterLoading(false);
      message.error(data.msg);
    }
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
