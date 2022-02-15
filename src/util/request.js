import axios from "axios";
import qs from 'qs'
// axios.defaults.baseURL='https://localhost:3000/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = "/api/";
axios.defaults.timeout = 1000;
axios.defaults.withCredentials = true;

export async function requestUserLogin(values) {
  try {
    let result = await axios.post("user/login", qs.stringify(values),);
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}

export async function requestUserRegister(values) {
  try {
    let result = await axios.post("user/register", qs.stringify(values));
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}

export async function requestQyData(pageNumber) {
  try {
    let result = await axios.get("qy/getData", {
      params: {
        pageNumber,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}

export async function requestEditQyData(obj) {
  try {
    let result = await axios.post("qy/editData", qs.stringify(obj));
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}

export async function requestLogData(id) {
  try {
    let result = await axios.get("log/getData", {
      params: {
        id,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}

export async function requestUserInfo(account) {
  try {
    let result = await axios.get("user/getUserInfo", {
      params: {
        account,
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}

export async function requestEditUserPassword(account, password) {
  try {
    let result = await axios.post("user/editPassword", qs.stringify({
      account,
      password,
    }));
    console.log(result)
    return result.data;
  } catch (e) {
    console.log(e);
    return {
      status: "failed",
      msg: "网络异常",
    };
  }
}
