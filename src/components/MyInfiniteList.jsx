import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Button, List, Skeleton } from "antd";
import { loadingContext } from "../App";
import Loading from "./Loading";
import axios from "axios";

export default () => {
  let { setCenterLoading, setLoading } = useContext(loadingContext);
  const [list, setList] = useState([]);
  const requestList = async (x) => {
    axios.defaults.baseURL = "http://localhost:3000/";
    let data = await axios.get("log/getData", {
      params: {
        pageNumber: 1,
      },
    });
    setList(list.concat(data.data.data));
  };
  useEffect(() => {
    requestList().then();
  }, []);
  return (
    <div>
      <InfiniteScroll
        dataLength={list.length}
        next={requestList}
        hasMore={true}
        loader={<Skeleton paragraph={{ rows: 3 }} active />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <List
          dataSource={list}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={<a href="#">{item.time}</a>}
                description={item.content}
              />
              {/*<Button type='primary'>Content</Button>*/}
            </List.Item>
          )}
        />
        {/*{list.map((item, index) => (*/}
        {/*    <div style={{height: 100}} key={index}>*/}
        {/*        {item.id}*/}
        {/*    </div>*/}
        {/*))}*/}
      </InfiniteScroll>
    </div>
  );
};
