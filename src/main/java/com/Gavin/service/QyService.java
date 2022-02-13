package com.Gavin.service;

import com.Gavin.bean.Machinedata;

import java.util.List;

public interface QyService {
    int selectcount();

    List<Machinedata> selectByPage(int pageNumber, int pagesize);
}
