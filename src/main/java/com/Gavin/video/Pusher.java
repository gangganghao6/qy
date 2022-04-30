package com.Gavin.video;

/**
 * @author: Gavin
 * @description:
 * @className: Pusher
 * @date: 2022/4/30 10:22
 * @version:0.1
 * @since: jdk14.0
 */

import org.bytedeco.javacpp.avcodec;
import org.bytedeco.javacv.FFmpegFrameRecorder;
import org.bytedeco.javacv.Frame;
import org.bytedeco.javacv.FrameRecorder;
import org.bytedeco.javacv.OpenCVFrameGrabber;

import java.util.function.Consumer;

/**
 * RTMP视频推流器
 */
public class Pusher extends BStreamer {
    private Thread thread;
    /**
     * 视频采集器（摄像头）
     */
    OpenCVFrameGrabber grabberCV;
    ///推流
    FrameRecorder recorder;
    private boolean exit = true;

    public Pusher(String url) {
        super(url);
    }

    public Pusher(String url, int w, int h) {
        super(url, w, h);
    }
    public void close() throws Exception {
        exit = false;
        if(grabberCV!=null){
            grabberCV.close();
        }
        if(recorder.isInterleaved()){
            recorder.close();
            recorder.setInterleaved(false);
        }
        this.thread.interrupt();
    }
    public void start() throws Exception {
        exit = true;
        if(grabberCV!=null){
            grabberCV.start();
        }
        if(recorder.isInterleaved()){
            recorder.start();
            recorder.setInterleaved(true);
        }
        this.thread.start();
    }
    public void push(Consumer<Frame> consumer) throws Exception {
        ///采集摄像头
        grabberCV = new OpenCVFrameGrabber(0);
        grabberCV.setImageWidth(getWidth());
        grabberCV.setImageHeight(getHeight());
        ///推流
        // recorder = FrameRecorder.createDefault(getUrl(), getWidth(), getHeight());
        recorder=new FFmpegFrameRecorder(getUrl(), getWidth(), getHeight());

        recorder.setVideoCodec(avcodec.AV_CODEC_ID_H264); // 28
        recorder.setFormat("flv"); // rtmp的类型
        recorder.setFrameRate(30);
        // recorder.setVideoBitrate(10 * 1024 * 1024);

        this.thread = new Thread(() -> {
            try {
                while (exit) {
                    Frame f = grabberCV.grab();
                    if (f != null) {
                        if (recorder.isInterleaved()) {
                            System.out.println("push stream...");
                            recorder.record(f);
                            consumer.accept(f);
                        }
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                recorder.setInterleaved(false);
            }
        });

    }
}

