package com.Gavin.bean;


import lombok.*;

import java.io.Serializable;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

  private String id;
  private String account;
  private String password;
  private String email;
  private String companyname;


}
