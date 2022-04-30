package com.Gavin.util;

import org.bytedeco.javacv.CanvasFrame;

import javax.swing.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.util.function.Consumer;

/**
 * @author: Gavin
 * @description:   关于开启摄像头窗口的工具类
 * @className: Windows
 * @date: 2022/4/30 10:31
 * @version:0.1
 * @since: jdk14.0
 */
public class Windows {
    public static CanvasFrame build(String title, Consumer<CanvasFrame> closeEvt) {
        //新建一个窗口
        int width = 640;
        int height = 480;
        CanvasFrame canvas = new CanvasFrame(title);
        canvas.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //canvas.setResizable(false);
        canvas.setAlwaysOnTop(true);
        canvas.setBounds(0, 0, width, height);
        canvas.getContentPane().setLayout(null);
        canvas.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent evt) {
                closeEvt.accept(canvas);
                System.exit(0);
            }
        });
        return canvas;
    }
}