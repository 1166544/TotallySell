(function() {
  'use strict';
  angular
    .module('app.services')
    .service('LoginService', LoginService);

  LoginService.$inject = ["$http", "CommonFactory", "SUMIATE_DATA_MODE", "BASE_CONFIG"];
  /**
   * 登录服务
   * @returns {{login: Function}}
   * @constructor
   */
  function LoginService($http, CommonFactory, SUMIATE_DATA_MODE, BASE_CONFIG) {
    return {
      login:login
    }

    function login(userName, password) {

      var loginResult = false;

      // 模拟数据
      if(SUMIATE_DATA_MODE)
      {
        if (userName == "xxd" && password == "xxd") {
          loginResult = true;
        }
        else {
          loginResult = false;
        }

        return loginResult;
      }
      else
      {
        // 从数据库拿用户名和MD5密码较验
        var parms = {
          name : userName,
          password : md5(password)
        };

        return $http.post(
          BASE_CONFIG.routeUrl + "p/users/loginUser",
          parms,
          {headers: {'Content-Type': "application/x-www-form-urlencoded"}
        })
          .success(getLoginComplete)
          .error(getLoginFail);

      }

      /**
       * 登录成功处理
       * @param data
       * @param status
       * @param headers
       * @param config
       * @returns {boolean}
       */
      function getLoginComplete(data, status, headers, config){
        loginResult = true;
        CommonFactory.saveUserLoginInfo(data);
        return loginResult;
      }

      /**
       * 登录失败处理
       * @param data
       * @param status
       * @param headers
       * @param config
       * @returns {boolean}
       */
      function getLoginFail(data, status, headers, config){
        loginResult = false;
        return loginResult;
      }
    }
  }
})();
