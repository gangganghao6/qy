package com.Gavin.controller;

import com.Gavin.bean.Data;
import com.Gavin.bean.User;
import com.Gavin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;



    @PostMapping("/login")
    @ResponseBody
    public Data login(String name,String password){
        User user=userService.findUserByAccount(name);
        if (user==null)
            return new Data("failed","不存在该账号",null);
        if (!user.getPassword().equals(password))
            return new Data("failed","密码不正确",null);
        return new Data("success","登陆成功",user);
    }

}
