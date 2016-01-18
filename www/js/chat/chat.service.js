(function () {
    'use strict';
    angular
      .module('app.services')
      .service('ChatService', ChatService);

    ChatService.$inject = ["$http", "$q", "CommonFactory", "BaseConfig", "CodeConfig"];

    function ChatService($http, $q, CommonFactory, BaseConfig, CodeConfig){

        var socket;

        return {
          sendMessage : sendMessage,
          connectSocket : connectSocket
        }

        /**
         * 连接SOCKET
         */
        function connectSocket(){
          var resultData;
          var deferred = $q.defer();
          var promise = deferred.promise;

          //$http.get(CommonFactory.getServerUrl("p/dash/getAboutData"))
          //  .success(handleSuccess)
          //  .error(handleError);
          //return promise;
          if(!socket){

            //socket = io(BaseConfig.socketUrl);
            //socket.on('open',function(){
            //  console.log('已连接至服务器,请输入昵称');
            //});
            //
            ////监听system事件，判断welcome或者disconnect，打印系统消息
            //socket.on('system',function(json){
            //  var sep='';
            //  var onlinehtml='';
            //  var onlineUsers=json.onlineUsers;
            //  for(key in onlineUsers){
            //    if(onlineUsers.hasOwnProperty(key)){
            //      onlinehtml+=sep+onlineUsers[key];
            //      sep='、';
            //    }
            //  }
            //
            //  if(json.type==='welcome'){
            //    console.log('Sys('+json.time+')welcome '+json.text);
            //    console.log('在线人数:'+json.onlineUserCount+'。在线列表:'+onlinehtml);
            //  }else if(json.type==='disconnect'){
            //    console.log('Sys('+json.time+')bye '+json.text+'');
            //    console.log('在线人数:'+json.onlineUserCount+'。在线列表:'+onlinehtml);
            //  }
            //});
            //
            ////监听服务端的chat message事件，接受每一条消息
            //socket.on('chat message',function(json){
            //  console.log(json.author+'('+json.time+')'+':'+json.text);
            //});

          }

          return promise;
          /**
           * 处理成功
           * @param data
           * @param status
           * @param headers
           * @param config
           */
          function handleSuccess(data, status, headers, config) {
            if(angular.isArray(data)){
              resultData = data[0];
            }
            else{
              resultData = data;
            }
            deferred.resolve(resultData);
          }

          /**
           * 处理失败
           * @param data
           * @param status
           * @param headers
           * @param config
           */
          function handleError(data, status, headers, config){
            resultData = CodeConfig.OPERATE_FAIL;
            deferred.reject(resultData);
          }
        }

        /**
         * 发送数据
         * @param channel
         * @param protocol
         * @param message
         */
        function sendMessage(channel, protocol, message){
          socket.emit('chat message', message);
        }

    }

})();
