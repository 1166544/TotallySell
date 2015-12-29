(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('loginCtrl', LoginCtrl);

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

    // 登录处理,成功则跳转至主页面
    function doLogin() {
      if (LoginService.login($scope.loginData.userName, $scope.loginData.password)) {
        $scope.hideTips();
        $state.go("tab.dash");
        $scope.clearInput();
      }
      else {
        $scope.showTips();
      }
    }

    // 移除输入内容
    function clearInput() {
      $scope.loginData.userName = $scope.loginData.password = "";
    }

    // 获得焦点处理
    function doFocus() {
      hideTips();
    }

    function showTips() {
      $scope.loginData.inviated = true;
    }

    function hideTips() {
      $scope.loginData.inviated = false;
    }
  }
})();
