(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ["$scope", "$state", "LoginService"];
  /**
   * 登录页面控制器
   * @param $scope
   * @param $state
   * @param LoginService
   * @constructor
   */
  function LoginCtrl($scope, $state, LoginService)
  {
    $scope.loginData = {userName: "", password: "", inviated: false};
    $scope.doLogin = doLogin;
    $scope.clearInput = clearInput;
    $scope.doFocus = doFocus;
    $scope.showTips = showTips;
    $scope.hideTips = hideTips;

    /**
     * 登录处理,成功则跳转至主页面
     */
    function doLogin() {
      LoginService.login($scope.loginData.userName, $scope.loginData.password).then(loginResult, loginError);
    }

    /**
     * 登录请求返回处理
     * @param result
     */
    function loginResult(result){
        if(result){
          // 登录成功
          $scope.hideTips();
          $state.go("tab.dash");
          $scope.clearInput();
        }else{
          // 登录失败
          $scope.showTips();
        }
    }

    /**
     * 登录错误处理
     * @param error
     */
    function loginError(error){
      $scope.showTips();
    }

    /**
     * 移除输入内容
     */
    function clearInput() {
      $scope.loginData.userName = $scope.loginData.password = "";
    }

    /**
     * 获得焦点处理
     */
    function doFocus() {
      hideTips();
    }

    /**
     * 显示提示
     */
    function showTips() {
      $scope.loginData.inviated = true;
    }

    /**
     * 移除提示
     */
    function hideTips() {
      $scope.loginData.inviated = false;
    }
  }
})();
