// if (Object.prototype.toString.call(str64Value) == "[object String]")
var storage = {
  set(key, value) {
    var str64Value = window.btoa(value)
    localStorage.setItem(key, JSON.stringify(str64Value));
  },
  get(key) {
    if (!key) return
    let v = JSON.parse(localStorage.getItem(key))
  
    var str64Value = window.atob(v)
    

    if (v == null) {
      return ""
    }
    console.log(str64Value)
   
    return str64Value
  },
  remove(key) {
    localStorage.removeItem(key)
  },

}


//登录页面-手机号码校验-账号校验
const phoneValidate =
  (rule, value, callback) => {
    var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    if (value.length < 6) {
      callback(new Error("输入账号必须大于6位"))
    } else if (value.length > 18) {
      callback(new Error("输入账号必须小于18位"))
    }
    // if (!reg.test(value)) {
    //   callback(new Error('手机号格式错误'));
    // }
    else {
      callback()
    }
  }

//密码校验
const passwordValidate =
  (rule, value, callback) => {
    var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    if (value.length < 6) {
      callback(new Error("输入密码必须大于6位"))
    } else if (value.length > 18) {
      callback(new Error("输入密码必须小于18位"))
    }
    // if (!reg.test(value)) {
    //   callback(new Error('手机号格式错误'));
    // }
    else {
      callback()
    }
  }

//py文件校验
const caseCname =
  (rule, value, callback) => {
    var reg = /^[a-zA-Z][a-zA-Z0-9_]{0,}$/;
    if (!reg.test(value)) {
      callback(new Error("请输入标准的py脚本文件名称"))
    }
    // if (!reg.test(value)) {
    //   callback(new Error('手机号格式错误'));
    // }
    else {
      callback()
    }
  }



export default {
  storage,
  phoneValidate,
  passwordValidate,
  caseCname
}
