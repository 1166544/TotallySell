(function () {
    'use strict';
    angular
      .module('app.constants')
      .constant('Protocol', {
        CLIENT_001 : 0x000001,                // 聊天登录
        SERVER_001 : 0x000002                 // 聊天登录返回
      });

})();
