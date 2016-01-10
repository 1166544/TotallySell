// 定义模块和注入依赖
angular.module('app.controllers', ['app.services', 'app.filters'])

// 公用常量/顶部/底部
.constant("TOP",    "top")
.constant("BOTTOM", "bottom")

// 好/中/差评
.constant("GOOD",   "good")
.constant("MIDDLE", "middle")
.constant("BAD",    "bad")

// 购物车更新
.constant("UPDATE_CART", "update_cart")

// 是否为模拟数据模式
.constant("SUMIATE_DATA_MODE", false)

// 服务器配置
.constant("BASE_CONFIG", {
    serverUrl : "http://127.0.0.1:1337/",                                            // 服务器地址
    headers : { headers: {'Content-Type' : "application/x-www-form-urlencoded"} }    // 请求消息头
  })


// 与服务端通讯代码
.constant("CODE_CONFIG", {
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
    }
  });

