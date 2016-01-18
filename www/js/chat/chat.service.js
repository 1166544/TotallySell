(function () {
    'use strict';
    angular
      .module('app.services')
      .factory('ChatService', ChatService);

    ChatService.$inject = ["$rootScope","BaseConfig"];

    function ChatService($rootScope, BaseConfig){

        var socket = io.connect(BaseConfig.socketUrl);

        return {
          on: onMessage,
          emit: emitMessage
        }

        function onMessage(eventName, callback) {
          socket.on(eventName, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              callback.apply(socket, args);
            });
          });
        }

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
