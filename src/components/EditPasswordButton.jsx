import {Button, message} from "antd";
import {memo, useContext} from "react";
import {useNavigate} from "react-router-dom";
import EditPassword from "./EditPassword";
import {loadingContext} from "../App";
import {requestEditUserPassword, requestUserInfo} from "../util/request.js";

export default memo(function ({editVisible, setEditVisible}) {
    let navigate = useNavigate();
    let {setCenterLoading} = useContext(loadingContext);
    const onEdit = async ({oldPassword, newPassword}) => {
        setCenterLoading(true);
        let old = JSON.parse(localStorage.getItem('user')).password;
        let account = JSON.parse(localStorage.getItem('user')).account;
        let data = await requestEditUserPassword(account, newPassword);
        if (old !== oldPassword) {
            setCenterLoading(false);
            console.log(old,oldPassword)
            message.error('原密码错误！');
            return;
        }
        if (data.status === "success") {
            let data = await requestUserInfo(JSON.parse(localStorage.getItem('user')).account);
            localStorage.setItem("user", JSON.stringify(data.data));
            console.log(data)
            setCenterLoading(false);
            message.success("修改成功");
            setEditVisible(false);
            navigate("/userInfo");
        } else {
            setCenterLoading(false);
            message.error(data.msg);
        }
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setEditVisible(true);
                }}
                ghost
                style={{marginRight: "12px"}}
            >
                修改密码
            </Button>
            <EditPassword
                visible={editVisible}
                onEdit={onEdit}
                onCancel={() => {
                    setEditVisible(false);
                }}
            />
        </div>
    );
});
