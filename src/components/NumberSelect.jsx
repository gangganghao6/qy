import { InputNumber } from "antd";
import { memo } from "react";

function onChange(value) {
  console.log("changed", value);
}

export default memo(function (props) {
  let { x, y } = props.coordinate;
  let { setCoordinate } = props;

  function changeX(value) {
    setCoordinate({ x: value, y });
  }

  function changeY(value) {
    setCoordinate({ x, y: value });
  }

  return (
    <span>
      X :{" "}
      <InputNumber
        style={{
          width: 80,
        }}
        defaultValue={x}
        min="0"
        max="100000"
        step="1.0"
        onChange={changeX}
        stringMode
      />
      &nbsp; Y :{" "}
      <InputNumber
        style={{
          width: 80,
        }}
        defaultValue={y}
        min="0"
        max="100000"
        step="1.0"
        onChange={changeY}
        stringMode
      />
    </span>
  );
});
