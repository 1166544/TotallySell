angular.module('app.constants', [])

.constant("AppConfig", {

    TOP               : "top",             // 公用常量/顶部
    BOTTOM            : "bottom",          // 公用常量/底部

    GOOD              : "good",            // 好评
    MIDDLE            : "middle",          // 中评
    BAD               : "bad",             // 差评

    UPDATE_CART       : "update_cart",     // 购物车更新

    SUMIATE_DATA_MODE : false              // 是否为模拟数据模式

})

// 服务器配置
.constant("BaseConfig", {
  socketUrl : "http://12.0.0.1:3000/",                                             // SOCKET地址
  serverUrl : "http://127.0.0.1:1337/",                                            // 服务器地址
  headers : { headers: {'Content-Type' : "application/x-www-form-urlencoded"} }    // 请求消息头
})

// 与服务端通讯代码
.constant("CodeConfig", {
  LOGIN_SUCCESS : {
    code : 200,
    msg : "登录成功"
  },

  LOGIN_FAIL : {
    code : 201,
    msg : "登录失败"
  },

  OPERATE_FAIL: {
    code: 203,
    msg: "操作失败"
  },

  DELETE_SUCCESS: {
    code : 204,
    msg : "删除成功"
  },

  INSERT_FAIL: {
    code: 205,
    msg: "插入失败"
  },

  INSERT_SUCCESS: {
    code: 206,
    msg: "增加成功"
  },

  USER_EXISTS: {
    code: 207,
    msg: "用户已存在"
  },

  OPERATE_SUCCESS: {
    code: 208,
    msg: "操作成功"
  }
});
