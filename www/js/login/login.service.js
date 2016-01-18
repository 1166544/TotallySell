(function() {
  'use strict';
  angular
    .module('app.services')
    .service('LoginService', LoginService);

  LoginService.$inject = ["$http", "$q", "CommonFactory", "AppConfig", "BaseConfig"];
  /**
   * 登录服务
   * @returns {{login: Function}}
   * @constructor
   */
  function LoginService($http, $q, CommonFactory, AppConfig, BaseConfig) {
    return {
      login:login
    }

    function login(userName, password) {

      var loginResult = false;
      var deferred = $q.defer();
      var promise = deferred.promise;

      // 模拟数据
      if(AppConfig.SUMIATE_DATA_MODE)
      {

        if (userName === "xxd" && password === "xxd") {
          loginResult = true;
        }
        else {
          loginResult = false;
        }
        deferred.resolve(loginResult);
        return promise;

      }
      else
      {

        // 从数据库拿用户名和MD5密码较验
        var parms = {
          name : userName,
          password : md5(password)
        };

        $http.post(CommonFactory.getServerUrl("p/users/loginUser"), parms, BaseConfig.headers)
          .success(handleSuccess)
          .error(handleError);
        return promise;

      }

      /**
       * 处理成功
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleSuccess(data, status, headers, config) {
        loginResult = true;
        CommonFactory.saveUserLoginInfo(data);
        deferred.resolve(loginResult);
      }

      /**
       * 处理失败
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleError(data, status, headers, config){
        loginResult = false;
        deferred.reject(loginResult);
      }

    }
  }
})();
