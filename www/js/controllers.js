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
    routeUrl:"http://127.0.0.1:1337/"
  });

