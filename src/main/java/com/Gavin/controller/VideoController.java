package com.Gavin.controller;

import com.Gavin.video.RecordCamera;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * @author: Gavin
 * @description:
 * @className: VideoController
 * @date: 2022/4/18 10:27
 * @version:0.1
 * @since: jdk14.0
 */
@Controller
@RequestMapping("/video")
public class VideoController {



    @GetMapping ("/camera")
    public String camera() throws Exception {
        new RecordCamera().action(600);
        return
    }
}
