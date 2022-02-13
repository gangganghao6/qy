package com.Gavin.controller;

import com.Gavin.bean.Data;
import com.Gavin.bean.User;
import com.Gavin.service.UserService;
import com.Gavin.util.IdUtil;
import com.Gavin.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
    public Data login(String account,String password){
        User user=userService.findUserByAccount(account);
        if (user==null)
            return new Data("failed","不存在该账号",null);
        if (user.getPassword().equals(password))
            return new Data("success","登陆成功",user);
        return new Data("failed","密码不正确",null);

    }

    @PostMapping("/register")
    @ResponseBody
    public Data register(User user){
        user.setTime(TimeUtil.getlocaltime());
        user.setId(IdUtil.getUUId());
        User user1=userService.findUserByAccount(user.getAccount());
        if (user1==null){
            userService.addUser(user);
            return new Data("success","登陆成功",null);
        }
            return new Data("failed","用户名已存在！",null);
    }

    @GetMapping("/getUserInfo")
    @ResponseBody
    public Data getUserInfo(String account){
        User user=userService.findUserByAccount(account);
        if (user==null)
            return new Data("failed","无该账号",null);
        return new Data("success","请求成功",user);
    }

    @PostMapping("/editPassword")
    @ResponseBody
    public Data editPassword(String account,String password){
        User user=userService.findUserByAccount(account);
        if (user==null)
            return new Data("failed","无该账号",null);
        user.setPassword(password);
        return new Data("success","修改成功",user);
    }

}
