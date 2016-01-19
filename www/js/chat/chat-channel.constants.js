(function () {
    'use strict';
    angular
      .module('app.constants')
      .constant('SocketConst', {
        CHAT_GLOBAL         : 'chat global',            // 全服消息
        CHAT_PRIVATE        : 'chat private',           // 私聊
        CHAT_UNION          : 'chat union',             // 公会聊天
        CHAT_TEAM           : 'chat team',              // 组队聊天
        CHAT_HORN           : 'chat horn',              // 大喇叭
        BROADCAST_PROTOCOL  : 'broadcast protocol',     // 一般通讯协议
        BROADCAST_GLOBAL    : 'broadcast global',       // 全服广播通知滚动跑马灯
        BROADCAST_PRIVATE   : 'broadcast private',      // 只对某一用户广播通知跑马灯
        SOCKET_MESSAGE      : 'chat message',           // 聊天信息标识
        SOCKET_SYSTEM       : 'system',                 // 聊天系统标识
        SOCKET_OPEN         : 'open',                   // 聊天连接成功标识
        CHAT_AUTHOR         : "author",                 // 聊天作者ID
        CHAT_TIME           : "time"                    // 聊天时间
      });

})();
