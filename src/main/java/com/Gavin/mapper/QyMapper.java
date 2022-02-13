package com.Gavin.mapper;

import com.Gavin.bean.Machinedata;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface QyMapper {
    int selectcount();

    List<Machinedata> selectByPage(int begin,int end);
}