(function () {
    'use strict';
    angular
      .module('app.services')
      .service("SignUpService", SignUpService);

  SignUpService.$inject = ["$http", "$q", "CommonFactory", "SUMIATE_DATA_MODE", "BASE_CONFIG", "CODE_CONFIG"];

  /**
   * 注册用户服务
   * @param $http
   * @param SUMIATE_DATA_MODE
   * @param BASE_CONFIG
   * @returns {{signUp: signUp}}
   * @constructor
   */
  function SignUpService($http, $q, CommonFactory, SUMIATE_DATA_MODE, BASE_CONFIG, CODE_CONFIG){

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
      var deferred = $q.defer();
      var promise = deferred.promise;

      // 模拟数据
      if(SUMIATE_DATA_MODE)
      {

        createResult = CODE_CONFIG.LOGIN_SUCCESS;
        deferred.resolve(createResult);
        return promise;

      }
      // 真实数据
      else{

        signUpData.password = md5(signUpData.password);
        $http.post(BASE_CONFIG.getServerUrl("p/users/addUser"), signUpData, BASE_CONFIG.headers)
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
        createResult = data;
        deferred.resolve(createResult);
      }

      /**
       * 处理失败
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleError(data, status, headers, config){
        createResult = CODE_CONFIG.LOGIN_FAIL;
        deferred.reject(createResult);
      }

    }

  }

})();
