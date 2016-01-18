(function () {
    'use strict';
    angular
      .module('app.constants')
      .constant('SocketConst', {
        CHAT_GLOBAL         : 'CHAT_GLOBAL',            // 全服消息
        CHAT_PRIVATE        : 'CHAT_PRIVATE',           // 私聊
        CHAT_UNION          : 'CHAT_UNION',             // 公会聊天
        CHAT_TEAM           : 'CHAT_TEAM',              // 组队聊天
        CHAT_HORN           : 'CHAT_HORN',              // 大喇叭
        BROADCAST_PROTOCOL  : 'BROADCAST_PROTOCOL',     // 一般通讯协议
        BROADCAST_GLOBAL    : 'BROADCAST_GLOBAL',       // 全服广播通知滚动跑马灯
        BROADCAST_PRIVATE   : 'BROADCAST_PRIVATE'       // 只对某一用户广播通知跑马灯
      });


})();
