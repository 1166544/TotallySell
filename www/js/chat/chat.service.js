(function () {
    'use strict';
    angular
      .module('app.services')
      .factory('ChatService', ChatService);

    ChatService.$inject = ["$rootScope","BaseConfig", "SocketConst"];

    function ChatService($rootScope, BaseConfig, SocketConst){

        var socket = io.connect(BaseConfig.socketUrl);

        return {
          on            : onMessage,      // 收到消息
          sendToGlobal  : sendToGlobal,   // 发给全服消息
          sendToUser    : sendToUser,     // 私聊某个人
          sendToUnion   : sendToUnion,    // 公会聊天
          sendToTeam    : sendToTeam      // 组队聊天
        }

        /**
         * 获取组装信息
         * @param protocol
         * @param msg
         * @param channel
         */
        function getSendObj(protocol, msg, channel){
          var data = {};
          if(protocol && msg && channel){
            data.protocol = protocol;
            data.message = msg;
            data.channel = channel;
          }
          return data;
        }

        /**
         * 收到消息
         * @param eventName
         * @param callback
         */
        function onMessage(eventName, callback) {
          socket.on(eventName, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              callback.apply(socket, args);
            });
          });
        }

        /**
         * 发给全服消息
         * @param protocol
         * @param msg
         */
        function sendToGlobal(protocol, msg){
          var data = getSendObj(protocol, msg, SocketConst.CHAT_GLOBAL);
          emitMessage(SocketConst.SOCKET_MESSAGE, data);
        }

        /**
         * 私聊某个人
         * @param protocol
         * @param msg
         */
        function sendToUser(protocol, msg){
          var data = getSendObj(protocol, msg, SocketConst.CHAT_PRIVATE);
          emitMessage(SocketConst.SOCKET_MESSAGE, data);
        }

        /**
         * 公会聊天
         * @param data
         */
        function sendToUnion(protocol, msg){
          var data = getSendObj(protocol, msg, SocketConst.CHAT_UNION);
          emitMessage(SocketConst.SOCKET_MESSAGE, data);
        }

        /**
         * 组队聊天
         * @param data
         */
        function sendToTeam(protocol, msg){
          var data = getSendObj(protocol, msg, SocketConst.CHAT_UNION);
          emitMessage(SocketConst.SOCKET_MESSAGE, data);
        }

        /**
         * 发送消息
         * @param eventName
         * @param data
         * @param callback
         */
        function emitMessage(eventName, data, callback) {
          socket.emit(eventName, data, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          })
        }

    }

})();
