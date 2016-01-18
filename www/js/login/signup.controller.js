(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('SignUpCtrl', SignupCtrl);

  SignupCtrl.$inject = ["$scope", "$state", "SignUpService", "CodeConfig"];
  /**
   * 注册新用户逻辑
   * @param $scope
   * @constructor
   */
  function SignupCtrl($scope, $state, SignUpService, CodeConfig) {

    /**
     * 表单提交数据
     * @type {{}}
     */
    $scope.signUpData = {
      firstName:"",
      lastName:"",
      password:"",
      email:"",
      phone:"",
      address:""
    };

    $scope.reset = reset;
    $scope.signUp = signUp;

    /**
     * 重置操作
     */
    function reset() {
      $scope.signUpData = {
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        phone:"",
        address:"",
        userExists:false
      };
    }

    /**
     * 提交表单操作
     */
    function signUp() {
      $scope.signUpData.userExists = false;
      SignUpService.signUp($scope.signUpData).then(signUpResult, signUpError);
    }

    function signUpResult(result){

      var success = CodeConfig.LOGIN_SUCCESS;
      var fail = CodeConfig.USER_EXISTS;

      switch(result.code){
        case CodeConfig.USER_EXISTS.code:
          // 提示用户已存在
          $scope.signUpData.userExists = true;
          break;
        case CodeConfig.LOGIN_SUCCESS.code:
          // 成功创建用户,跳转至主页面
          $state.go("tab.dash");
          $scope.reset();
          break;
      }
    }

    function signUpError(error){
      // hole
    }

  }
})();
