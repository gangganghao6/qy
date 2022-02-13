package com.Gavin.controller;


import com.Gavin.bean.Machinedata;
import com.Gavin.bean.pageInfo;
import com.Gavin.service.QyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/qy")
public class QyController {

    @Autowired
    private QyService qyService;

    @GetMapping("/getData")
    @ResponseBody
    public pageInfo getData(int pageNumber){
        List<Machinedata> list = qyService.selectByPage(pageNumber, 10);
        return new pageInfo(qyService.selectcount(),list);
    }

}
