import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, List, Skeleton } from "antd";
import { loadingContext } from "../App";
import Loading from "./Loading";

export default () => {
  let { setCenterLoading, setLoading } = useContext(loadingContext);
  const [list, setList] = useState([]);
  const requestList = () => {
    setLoading(true);
    setTimeout(() => {
      let data = [];
      for (let i = 10; i > 0; i--) {
        data.push({ id: i, name: "name", email: "email" });
      }
      setList(list.concat(data));
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    requestList();
  }, []);
  return (
    <div>
      <InfiniteScroll
        dataLength={list.length}
        next={requestList}
        hasMore={true}
        // loader={<Skeleton paragraph={{ rows: 3 }} active />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // loader={<h4>Loading...</h4>}
      >
        <List
          dataSource={list}
          // loading={<Loading/>}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={<a href="#">{item.name}</a>}
                description={item.email}
              />
              <button>Content</button>
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
