import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { List, message } from "antd";
import { loadingContext } from "../App";
import { requestLogData } from "../util/request.js";

export default () => {
  let { setCenterLoading, setLoading } = useContext(loadingContext);
  const [list, setList] = useState([]);
  let hasMore = true;
  let pageNumber = 0;
  const requestList = async () => {
    pageNumber++;
    setLoading(true);
    let data = await requestLogData(pageNumber);
    if (data.status === "success") {
      setList(list.concat(data.data));
      hasMore = data.hasMore;
      setLoading(false);
    } else {
      setLoading(false);
      message.error(data.msg);
    }
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
        loader={<></>}
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
