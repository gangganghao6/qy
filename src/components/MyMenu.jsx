import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { memo } from "react";

export default memo(function (props) {
  const { id, icon, path, title } = props.data;
  const { setKey } = props;
  return (
    <Menu.Item eventKey={id} icon={icon}>
      <NavLink to={path} onClick={setKey(id)}>
        {title}
      </NavLink>
    </Menu.Item>
  );
});
