package com.Gavin.mapper;

import com.Gavin.bean.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    void addUser(User user);

    User findUserByAccount(String account);

    void updateUserByAccount(String account,String password);
}
