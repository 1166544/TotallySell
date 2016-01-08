(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('signupCtrl', SignupCtrl);

  SignupCtrl.$inject = ["$scope", "$state", "SignUpService", "CODE_CONFIG"];
  /**
   * 注册新用户逻辑
   * @param $scope
   * @constructor
   */
  function SignupCtrl($scope, $state, SignUpService, CODE_CONFIG) {

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

      var data = SignUpService.signUp($scope.signUpData);
      if(data){
        switch (data.code)
        {
          case CODE_CONFIG.USER_EXISTS.code:
            // 提示用户已存在
            $scope.signUpData.userExists = true;
            break;
          case CODE_CONFIG.LOGIN_SUCCESS.code:
            // 成功创建用户,跳转至主页面
            $state.go("tab.dash");
            $scope.reset();
            break;
        }
      }

    }
  }
})();
