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
        return createResult;
      }
      // 真实数据
      else{
        signUpData.password = md5(signUpData.password);
        $http.post(
          BASE_CONFIG.routeUrl + "p/users/addUser",
          signUpData,
          BASE_CONFIG.headers)
          .success(function (data, status, headers, config) {
            createResult = data;
            deferred.resolve(createResult);
          })
          .error(function (data, status, headers, config){
            createResult = CODE_CONFIG.LOGIN_FAIL;
            deferred.reject(createResult);
          });
        return promise;
      }

    }

  }

})();
