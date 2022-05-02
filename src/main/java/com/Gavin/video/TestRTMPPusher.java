package com.Gavin.video;

import com.Gavin.util.Windows;
import org.bytedeco.javacv.CanvasFrame;

/**
 * @author: Gavin
 * @description:
 * @className: 推拉流的测试类
 * @date: 2022/4/30 22:16
 * @version:0.1
 * @since: jdk14.0
 */
public class TestRTMPPusher {
    public static void main(String[] args) throws Exception {
        //String url="rtsp://192.168.56.1:554/Sword";
        String url="rtmp://127.0.0.1/live/stream";
        Pusher pusher = new Pusher(url);
        CanvasFrame cf = Windows.build("测试RTMP推流", w -> {
            try {
                pusher.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        pusher.push(f -> {
            cf.showImage(f);
        });
        pusher.start();
    }
}
