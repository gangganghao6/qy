package com.Gavin.video;

import org.bytedeco.ffmpeg.global.avcodec;
import org.bytedeco.javacv.Frame;
import org.bytedeco.javacv.FrameRecorder;

/**
 * @author: Gavin
 * @description:
 * @className: RecordCamera
 * @date: 2022/5/6 20:30
 * @version:0.1
 * @since: jdk14.0
 */
public class RecordCamera extends CameraApplication{

    private static final String RECORD_ADDRESS = "rtmp://127.0.0.1/live/stream";

    //推流时的时间戳
    protected long startRecordTime = 0L;

    // 帧录制器
    protected FrameRecorder recorder;


    @Override
    protected void initOutput() throws Exception {
        // 实例化FFmpegFrameRecorder，将SRS的推送地址传入
        recorder = FrameRecorder.createDefault(RECORD_ADDRESS, getCameraImageWidth(), getCameraImageHeight());

        // 降低启动时的延时，参考
        // https://trac.ffmpeg.org/wiki/StreamingGuide)
        recorder.setVideoOption("tune", "zerolatency");
        // 在视频质量和编码速度之间选择适合自己的方案，包括这些选项：
        // ultrafast,superfast, veryfast, faster, fast, medium, slow, slower, veryslow
        // ultrafast offers us the least amount of compression (lower encoder
        // CPU) at the cost of a larger stream size
        // at the other end, veryslow provides the best compression (high
        // encoder CPU) while lowering the stream size
        // (see: https://trac.ffmpeg.org/wiki/Encode/H.264)
        // ultrafast对CPU消耗最低
        recorder.setVideoOption("preset", "ultrafast");
        // Constant Rate Factor (see: https://trac.ffmpeg.org/wiki/Encode/H.264)
        recorder.setVideoOption("crf", "28");
        // 2000 kb/s, reasonable "sane" area for 720
        recorder.setVideoBitrate(2000000);

        // 设置编码格式
        recorder.setVideoCodec(avcodec.AV_CODEC_ID_H264);

        // 设置封装格式
        recorder.setFormat("flv");

        // FPS (frames per second)
        // 一秒内的帧数
        recorder.setFrameRate(getFrameRate());
        // Key frame interval, in our case every 2 seconds -> 30 (fps) * 2 = 60
        // 关键帧间隔
        recorder.setGopSize((int)getFrameRate()*2);

        // 帧录制器开始初始化
        recorder.start();

    }

    @Override
    protected void output(Frame frame) throws Exception {
        if (0L==startRecordTime) {
            startRecordTime = System.currentTimeMillis();
        }

        // 时间戳
        recorder.setTimestamp(1000 * (System.currentTimeMillis()-startRecordTime));

        // 存盘
        recorder.record(frame);

    }

    @Override
    protected void releaseOutputResource() throws Exception {
        recorder.close();
    }

    public static void main(String[] args) {
        new RecordCamera().action(600);
    }
}
