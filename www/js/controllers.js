angular.module('app.controllers', ['app.services', 'app.filters'])

// 公用常量
.constant("TOP", "top")
.constant("BOTTOM", "bottom")

.controller('loginCtrl', LoginCtrl)
.controller('DashCtrl', DashCtrl)
.controller('signupCtrl', SignupCtrl)
.controller('shopCtrl', ShopCtrl)
.controller('cartCtrl', CartPageCtrl)
.controller('profileCtrl', ProfileCtrl)
.controller('orderCtrl', OrderCtrl)
.controller('mainCtrl', MainCtrl)
.controller('deliveryCtrl', DeliveryCtrl)
.controller('aboutCtrl', AboutCtrl)
.controller('contactCtrl', ContactCtrl)
.controller('settingCtrl', SettingCtrl)
.controller('ProfileCtrl',ProfileCtrl)
.controller('SocialCtrl', SocialCtrl)
.controller('CartCtrl', CartCtrl)
.controller('listCtrl', ListCtrl)
.controller('listDetailCtrl', ListDetailCtrl);





CartPageCtrl.$inject = ["$scope"];
function CartPageCtrl($scope) {

}



SignupCtrl.$inject = ["$scope"];
function SignupCtrl($scope) {

}



ShopCtrl.$inject = ["$scope"];
function ShopCtrl($scope) {

}



OrderCtrl.$inject = ["$scope"];
function OrderCtrl($scope) {

}



MainCtrl.$inject = ["$scope"];
function MainCtrl($scope) {

}



DeliveryCtrl.$inject = ["$scope"];
function DeliveryCtrl($scope) {

}



AboutCtrl.$inject = ["$scope"];
function AboutCtrl($scope) {

}



ContactCtrl.$inject = ["$scope"];
function ContactCtrl($scope) {

}



SettingCtrl.$inject = ["$scope"];
function SettingCtrl($scope) {

}



ProfileCtrl.$inject = ["$scope"];
function ProfileCtrl($scope) {

}



SocialCtrl.$inject = ["$scope"];
function SocialCtrl($scope) {

}



CartCtrl.$inject = ["$scope"];
function CartCtrl($scope) {

}



ListCtrl.$inject = ["$scope"];
function ListCtrl($scope) {

}



ListDetailCtrl.$inject = ["$scope"];
function ListDetailCtrl($scope) {

}



ListDetailCtrl.$inject = ['$scope', '$state'];
/**
 * 列表详细页面控制器
 * @param $scope
 * @param $state
 * @constructor
 */
  function ListDetailCtrl($scope, $state) {
  console.log($state.params.aId);
}




ListCtrl.$inject = ['$scope', '$state'];
/**
 * 列表页面控制器
 * @param $scope
 * @param $state
 * @constructor
 */
function ListCtrl($scope, $state) {
  console.log($state.params.aId);
}



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




DashCtrl.$inject = ["$scope", "DashService", "TOP", "BOTTOM"];
/**
 * 主页面控制器
 * @param $scope
 * @param DashService
 * @param TOP
 * @param BOTTOM
 * @constructor
 */
function DashCtrl($scope, DashService, TOP, BOTTOM)
{
  $scope.topItemData = DashService.getSideItemData(TOP);
  $scope.bottomItemData = DashService.getSideItemData(BOTTOM);
  $scope.typeListData = DashService.getTypeListData();
}



