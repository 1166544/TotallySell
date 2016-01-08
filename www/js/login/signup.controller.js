(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('signupCtrl', SignupCtrl);

  SignupCtrl.$inject = ["$scope", "$state", "SignUpService"];
  /**
   * 注册新用户逻辑
   * @param $scope
   * @constructor
   */
  function SignupCtrl($scope, $state, SignUpService) {

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
        address:""
      };
    }

    /**
     * 提交表单操作
     */
    function signUp() {
      if(SignUpService.signUp($scope.signUpData)){
          $state.go("tab.dash");
          $scope.reset();
      }
    }
  }
})();
