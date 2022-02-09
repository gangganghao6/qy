package com.Gavin.bean;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Data {
    private String status;          //状态
    private String msg;             //响应信息
    private Object data;            //数据
}
