(function () {
    'use strict';
    angular
      .module('app.services')
      .service("SignUpService", SignUpService);

  SignUpService.$inject = ["$http", "CommonFactory", "SUMIATE_DATA_MODE", "BASE_CONFIG", "CODE_CONFIG"];

  /**
   * 注册用户服务
   * @param $http
   * @param SUMIATE_DATA_MODE
   * @param BASE_CONFIG
   * @returns {{signUp: signUp}}
   * @constructor
   */
  function SignUpService($http, CommonFactory, SUMIATE_DATA_MODE, BASE_CONFIG, CODE_CONFIG){

    return {
      signUp : signUp
    }

    /**
     * 新建用户信息入数据库
     * @param signUpData
     * @returns {*}
     */
    function signUp(signUpData) {

      var createResult;

      // 模拟数据
      if(SUMIATE_DATA_MODE)
      {
        createResult = CODE_CONFIG.LOGIN_SUCCESS;
        return createResult;
      }
      // 真实数据
      else{
        signUpData.password = md5(signUpData.password);
        return $http.post(
          BASE_CONFIG.routeUrl + "p/users/addUser",
          signUpData,
          BASE_CONFIG.headers)
          .success(signUpComplete)
          .error(signUpFail);
      }

      /**
       * 创建用户成功
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function signUpComplete(data, status, headers, config) {
        createResult = data;
        return createResult;
      }

      /**
       * 创建用户失败
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function signUpFail(data, status, headers, config){
        createResult = CODE_CONFIG.LOGIN_FAIL;
        return createResult;
      }

    }

  }

})();
