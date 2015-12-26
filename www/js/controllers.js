// 定义模块和注入依赖
angular.module('app.controllers', ['app.services', 'app.filters'])

// 公用常量/顶部/底部
.constant("TOP",    "top")
.constant("BOTTOM", "bottom")

// 好/中/差评
.constant("GOOD",         "good")
.constant("MIDDLE",       "middle")
.constant("BAD",          "bad")

// 向购物车传递添加商用品事件
.constant("ADD_TO_CART",  "add_to_cart");

