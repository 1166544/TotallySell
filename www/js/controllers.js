angular.module('app.controllers', ['app.services', 'app.filters'])

// 公用常量
.constant("TOP", "top")
.constant("BOTTOM", "bottom")

/**
 * 登录页面控制器
 */
.controller('loginCtrl', function($scope, $state, LoginService)
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
        $scope.showTips()
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
})

/**
 * 主页面控制器
 */
.controller('DashCtrl', function($scope, DashService, TOP, BOTTOM)
{
    $scope.topItemData = DashService.getSideItemData(TOP);
    $scope.bottomItemData = DashService.getSideItemData(BOTTOM);
    $scope.typeListData = DashService.getTypeListData();
})

.controller('signupCtrl', function($scope) {

})

.controller('shopCtrl', function($scope) {

})

.controller('cartCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('orderCtrl', function($scope) {

})

.controller('mainCtrl', function($scope) {

})

.controller('deliveryCtrl', function($scope) {

})

.controller('aboutCtrl', function($scope) {

})

.controller('contactCtrl', function($scope) {

})

.controller('settingCtrl', function($scope) {

})

.controller('ProfileCtrl', function($scope) {

})

.controller('SocialCtrl', function($scope) {

})

.controller('CartCtrl', function($scope) {

})

// LIST列表处理器
.controller('listCtrl', ['$scope', '$state', function($scope, $state) {
    console.log($state.params.aId);
}])
.controller('listDetailCtrl', ['$scope', '$state', function($scope, $state) {
    console.log($state.params.aId);
}])
