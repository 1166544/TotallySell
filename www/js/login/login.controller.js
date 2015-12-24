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
  $scope.loginData = {userName:"", password:"", inviated:false};

  // 登录处理,成功则跳转至主页面
  $scope.doLogin = function()
  {
    if(LoginService.login($scope.loginData.userName, $scope.loginData.password))
    {
      $scope.hideTips();
      $state.go("tab.dash");
      $scope.clearInput();
    }
    else{
      $scope.showTips();
    }
  }

  // 移除输入内容
  $scope.clearInput = function(){
    $scope.loginData.userName = $scope.loginData.password = "";
  }

  // 获得焦点处理
  $scope.doFocus = function(){
    $scope.hideTips();
  }

  $scope.showTips = function (){
    $scope.loginData.inviated = true;
  }

  $scope.hideTips = function (){
    $scope.loginData.inviated = false;
  }
}
