package com.Gavin.bean;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Setter
@Getter
@ToString
public class Machinedata implements Serializable {
  private String id;
  private double X;
  private double Y;
  private String time;

}
