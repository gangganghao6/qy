package com.Gavin.service.impl;


import com.Gavin.bean.User;
import com.Gavin.mapper.UserMapper;
import com.Gavin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public void addUser(User user) {
        userMapper.addUser(user);
    }

    @Override
    public User findUserByAccount(String account) {
        User user=userMapper.findUserByAccount(account);
        return user;
    }

    @Override
    public void updateUserByAccount(String account,String password) {
        userMapper.updateUserByAccount(account,password);
    }
}
