import React, { createContext, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { loginContext, loadingContext } from "../App";
import { message, Popconfirm, Space, Table, Tag } from "antd";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import EditQyData from "./EditQyData";

const { Column, ColumnGroup } = Table;

function confirm(navigate) {
  return function () {
    message.success("Delete success").then();
    navigate("/qylist", { replace: true });
  };
}

function cancel(navigate) {
  return function () {
    message.info("You canceled to delete").then();
  };
}

export default memo(function () {
  let navigate = useNavigate();
  let { setCenterLoading } = useContext(loadingContext);
  let { login } = useContext(loginContext);

  let [data, setData] = useState([]);
  let [record, setRecord] = useState({});
  let [isShow, setIsShow] = useState(false);
  setRecord = useCallback(setRecord, [record]);
  setIsShow = useCallback(setIsShow, [isShow]);
  setData = useCallback(setData, [data]);

  let isShowTemplate = isShow ? (
    <EditQyData record={record} setRecord={setRecord} isShow={isShow} setIsShow={setIsShow} />
  ) : (
    <></>
  );

  async function getQyTableData(pageNumber = 1) {
    axios.defaults.baseURL = "http://localhost:3000/";
    let data;
    try {
      data = await axios.get("qy/getData", {
        params: {
          pageNumber,
        },
      });
    } catch (e) {
      console.log(e);
    }
    return data.data.data;
  }

  async function loadingData(pageNumber = { current: 1 }) {
    let { current } = pageNumber;
    setCenterLoading(true);
    let data = await getQyTableData(current);
    setData(data);
    setCenterLoading(false);
  }

  function edit(records) {
    return function () {
      setRecord(records);
      setIsShow(true);
    };
  }

  useEffect(() => {
    loadingData().then();
  }, []);
  return (
    <>
      <Table
        dataSource={data.data}
        pagination={{ total: data.total }}
        scroll={{ y: window.innerHeight - 310 }}
        onChange={loadingData}
      >
        <Column title="序号" dataIndex="id" key="id" />
        <ColumnGroup title="坐标">
          <Column title="X" dataIndex="x" key="x" />
          <Column title="Y" dataIndex="y" key="y" />
        </ColumnGroup>
        <Column
          title="日期"
          dataIndex="time"
          key="time"
          // render={times => (
          //     <>
          //         {times}
          //     </>
          // )}
        />
        <Column
          title="操作"
          key="id"
          render={(text, record) => (
            <Space size="middle">
              {/*<NavLink to={'/table/editqydata'}>Edit</NavLink>*/}
              <a onClick={edit(record)}>Edit</a>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm(navigate)}
                onCancel={cancel(navigate)}
                okText="Yes"
                cancelText="No"
              >
                <a href="#">Delete</a>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
      {isShowTemplate}
    </>
  );
});
