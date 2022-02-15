import {InputNumber} from "antd";
import {memo} from "react";

export default memo(function (props) {
    let {x, y, z} = props.coordinate;
    let {setCoordinate} = props;

    function changeX(value) {
        setCoordinate({x: value, y, z});
    }

    function changeY(value) {
        setCoordinate({x, y: value, z});
    }

    function changeZ(value) {
        setCoordinate({x, y, z: value});
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
            &nbsp; Z :{" "}
            <InputNumber
                style={{
                    width: 80,
                }}
                defaultValue={z}
                min="0"
                max="100000"
                step="1.0"
                onChange={changeZ}
                stringMode
            />
    </span>
    );
});
