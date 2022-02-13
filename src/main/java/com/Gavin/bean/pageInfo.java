package com.Gavin.bean;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class pageInfo {
    int total;
    List<Machinedata> machinedata;
}
