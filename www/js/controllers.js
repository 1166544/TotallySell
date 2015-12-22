angular.module('app.controllers', ['app.services'])

// 登录页面模块
.controller('loginCtrl', function($scope, $state, LoginService)
  {
    $scope.loginData = {userName:"", password:""};

    $scope.doLogin = function(){
      if(LoginService.login($scope.loginData.userName, $scope.loginData.password)){
        $state.go("tab.dash");
      }
    }
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

.controller('DashCtrl', function($scope) {

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
