import flvjs from "flv.js";
import {memo, useEffect, useRef, useState} from "react";
import axios from "axios";
import createMockServer from "../util/mockUtil.js";
import {Button, message, Space, Switch} from "antd";

export default memo(function () {
    let videoEl;
    let flvPlayer;
    let isPlay = true;
    let url =
        "https://d1--cn-gotcha04.bilivideo.com/live-bvc/501609/live_279409474_19923319_1500.flv?cdn=cn-gotcha04&expires=1644292872&len=0&oi=1785887725&pt=web&qn=150&trid=1000e951ee421628488b9c2d42e9a76a41e8&sigparams=cdn,expires,len,oi,pt,qn,trid&sign=f9bfa1f57ad2d6b05584867bb55fb662&ptype=0&src=9&sl=1&sk=2935686d6cb9146c7a6a6a0b4e120e250342be3df4dc8310261aab0ce9e21e44&order=1";

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

    function reset(value) {
        message.info("复位");
    }

    return (
        <Space direction={"vertical"} style={{width: "100%", height: "100%"}}>
            <video
                id={"videoEl"}
                autoPlay={true}
                controls={true}
                style={{width: "100%", height: "100%", paddingBottom: "3%"}}
                muted={true}
            />
            <Space style={{display: "flex", justifyContent: "space-evenly"}}>
                <Space>
                    画面开关：
                    <Switch defaultChecked onChange={pause}/>
                </Space>
                <Space>
                    <Button type={"primary"} onClick={reset} ghost>
                        重置扦样
                    </Button>
                </Space>
                <Space>
                    扦样开关：
                    <Switch defaultChecked onChange={begin}/>
                </Space>
            </Space>
        </Space>
    );
});
