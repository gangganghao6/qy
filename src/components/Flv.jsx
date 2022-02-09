import flvjs from "flv.js";
import { memo, useEffect } from "react";

import { Button, message, Space, Switch } from "antd";

export default memo(function () {
  let videoEl;
  let flvPlayer;
  let isPlay = true;
  let url = "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv";
  // let url = 'https://i0.hdslb.com/bfs/vc/021028ec922b2527fff2e15ebe5a62da5ed87849.webm'

  function initPlay() {
    if (flvjs.isSupported()) {
      videoEl = document.getElementById("videoEl");
      flvPlayer = flvjs.createPlayer({
        type: "flv",
        url,
      });
      flvPlayer.attachMediaElement(videoEl);
      flvPlayer.load();
      flvPlayer.play();
    }
  }

  useEffect(() => {
    initPlay();
  }, []);

  function pause() {
    if (isPlay) {
      flvPlayer.unload();
      flvPlayer.detachMediaElement();
      isPlay = false;
    } else {
      initPlay();
      isPlay = true;
    }
  }

  function begin(value) {
    message.success(value ? "开始扦样" : "停止扦样");
  }

  function reset() {
    message.info("复位");
  }

  return (
    <Space direction={"vertical"} style={{ width: "100%", height: "100%" }}>
      <video
        id={"videoEl"}
        autoPlay={true}
        controls={true}
        style={{ width: "100%", height: "100%", paddingBottom: "3%" }}
        muted={true}
        loop={true}
      />
      <Space style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Space>
          画面开关：
          <Switch defaultChecked onChange={pause} />
        </Space>
        <Space>
          <Button type={"primary"} onClick={reset} ghost>
            重置扦样
          </Button>
        </Space>
        <Space>
          扦样开关：
          <Switch defaultChecked onChange={begin} />
        </Space>
      </Space>
    </Space>
  );
});
