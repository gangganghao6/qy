package com.Gavin.service;

import com.Gavin.bean.User;
import org.springframework.stereotype.Service;

public interface UserService {
    void addUser(User user);

    User findUserByAccount(String account);

    void updateUserByAccount(String account,String password);
}
