import React, { memo } from "react";
import { DatePicker, TimePicker, Space } from "antd";
import moment from "moment";

function PickerWithType({ type, onChange, time }) {
  if (type === "date") return <DatePicker defaultValue={moment(time)} onChange={onChange} format={"YYYY-MM-DD"} />;
  if (type === "time")
    return <TimePicker onChange={onChange} defaultValue={moment(time, "HH:mm:ss")} format={"HH:mm:ss"} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

export default memo(function SwitchablePicker(props) {
  console.log(props);
  let splitTime = props.time.split(" ");

  function changeTime(value) {
    props.setTime(splitTime[0] + " " + value.format("HH:mm:ss"));
  }

  function changeDate(value) {
    props.setTime(value.format("YYYY-MM-DD") + " " + splitTime[1]);
  }

  return (
    <Space>
      <PickerWithType type={"date"} onChange={changeDate} time={splitTime[0]} />
      <PickerWithType type={"time"} onChange={changeTime} time={splitTime[1]} />
    </Space>
  );
});
