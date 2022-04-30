import com.Gavin.bean.Machinedata;
import com.Gavin.bean.User;
import com.Gavin.config.SpringConfig;
import com.Gavin.mapper.QyMapper;
import com.Gavin.mapper.UserMapper;
import com.Gavin.service.QyService;
import com.Gavin.service.UserService;
import com.Gavin.util.Windows;
import com.Gavin.video.Pusher;
import org.bytedeco.javacv.CanvasFrame;
import org.bytedeco.javacv.FrameGrabber;
import org.bytedeco.javacv.OpenCVFrameGrabber;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.swing.*;
import java.util.List;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class UserTest {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private QyService qyService;

    @Autowired
    private UserService userService;

    @Test
    public void fun1(){
        User user=new User("9","9","9","9","9","9");
        userMapper.addUser(user);
    }

    @Test
    public void fun2(){
        userService.updateUserByAccount("gavin","1234");
    }

    @Test
    public void grabcamera() throws FrameGrabber.Exception {
                OpenCVFrameGrabber grabber = new OpenCVFrameGrabber(0);//新建opencv抓取器，一般的电脑和移动端设备中摄像头默认序号是0，不排除其他情况
                grabber.start();//开始获取摄像头数据

                CanvasFrame canvas = new CanvasFrame("摄像头预览");//新建一个预览窗口
                canvas.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);

                //窗口是否关闭
                while(canvas.isDisplayable()){
                    /*获取摄像头图像并在窗口中显示,这里Frame frame=grabber.grab()得到是解码后的视频图像*/
                    canvas.showImage(grabber.grab());
                }
                grabber.close();//停止抓取

    }


    @Test
    public void TestRTMPPusher() throws Exception {
            String url="rtmp://127.0.0.1/live/stream";
            Pusher pusher = new Pusher(url);
            CanvasFrame cf = Windows.build("测试RTMP推流", w -> {
                System.out.println("窗口已关闭！");
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
