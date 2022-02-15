# 粮食自动钎样软件文档
## 分为前端分支与后端分支
## ==1.系统功能==

### 	1.1注册及登录

​			注册和登录权限，注册和登录都有对应的界面

### 	1.2视频监控

​			双目摄像头返回的视频监控界面，可以实时监控粮面，并有相应的开始和停止扦样按钮。

### 	1.3扦样信息界面

​			一个界面用于展示扦样信息，包括扦样点位数据、扦样时间等。

### 	1.4用户信息界面

​			一个界面用户展示用户信息,如公司名称等。

## ==2.数据格式==

### 	2.1账户数据格式

​			账户(user)数据包括：

​				string类型的账号account

​				string类型的密码password

​				string类型的邮箱email

​				string类型的公司名称companyname

```java
public class user{
    string account;
    string passsword;
    string email;
    string companyname;
}
```



### 	2.2扦样信息数据格式

​		扦样机数据格式包括：

​			string类型的id

​			double类型的x轴坐标

​			double类型的y轴坐标

​			string类型的扦样时间time

​			(时间戳格式为： yyyy-MM-dd HH:mm:ss )

​			

```java
public class machine{
    string id;
    double x;
    double y;
    string time;
}
```

## ==3.API接口==

### 	3.1账号登陆

​			url：user/login  post

​			return:  status

```js
let request = {
    body: {
        account: 'string',
        password: 'string'
    }
}
let response = {
    data: {
        status: 'success',
        user: {
            account: 'string',
            companyName: 'string',
            email: 'string',
            time: 'string'//(注册时间)
        },
        msg: '登录成功'
    }
}
let response2 = {
    data: {
        status: 'failed',
        user: null,
        msg:'失败原因'
    }
}
```



### 	3.2账号注册

​			url:	user/register  post

​			return: status

```js
let request = {
    body: {
        account: 'string',
        password: 'string',
        companyName: 'string',
        email: 'string'
    }
}
let response = {
    data: {
        status: 'success',
        msg: '注册成功'
    }
}
let response2 = {
    data: {
        status: 'failed',
        msg: '失败原因'
    }
}
```



### 	3.3查询扦样机数据

​			url:  qy/getData  get

​			return :  pageInfo{

​				int total;

​				arraylist<machinemap>

}

```js
let request = {
    params: {
        pageNumber: Number
    }
}
let response = {
    data: {
        status: 'success',
        total: Number,
        data: [{
            time: 'string',
            x: Number,
            y: Number,
            id: 'string'
        }, {
            time: 'string',
            x: Number,
            y: Number,
            id: 'string'
        }],
        msg: '请求成功'
    }
}
let response2 = {
    data: {
        status: 'failed',
        total: Number,
        data: [],
        msg: '失败原因'
    }
}
```



### 	3.4获取用户信息

​			url:  user/getUserInfo  get

​			return: user

```js
let request = {
    body: {
        account: 'string'
    }
}
let response = {
    data: {
        status: 'success',
        data: {
            account: 'string',
            password: 'string',
            companyName: 'string',
            email: 'string'
        },
        msg: '请求成功'
    }
}
let response2 = {
    data: {
        status: 'failed',
        data: null,
        msg: '失败原因'
    }
}
```



### 	 3.5修改密码	

​			url: user/editPassword  post

```js
let request = {
    body: {
        account: 'string',
        password: 'string'
    }
}
let response = {
    data: {
        status: 'success',
        msg: '修改成功'
    }
}
let response2 = {
    data: {
        status: 'failed',
        msg: '失败原因'
    }
}
```

### 3.6修改扦样数据

url:qy/editData  post

```js
let request = {
    body: {
        id: 'string',
        x: Number,
        y: Number,
        time: 'string'
    }
}
let response = {
    data: {
        status: 'success',
        msg: '修改成功'
    }
}
let response2 = {
    data: {
        status: 'failed',
        msg: '失败原因'
    }
}
```

