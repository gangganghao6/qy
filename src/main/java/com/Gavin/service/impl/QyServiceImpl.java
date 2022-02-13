package com.Gavin.service.impl;

import com.Gavin.bean.Machinedata;
import com.Gavin.mapper.QyMapper;
import com.Gavin.service.QyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QyServiceImpl implements QyService {

    @Autowired
    private QyMapper qyMapper;

    @Override
    public int selectcount() {
        return qyMapper.selectcount();
    }

    @Override
    public List<Machinedata> selectByPage(int pageNumber, int pagesize) {
        return qyMapper.selectByPage((pageNumber-1)*pagesize,pagesize);
    }
}
