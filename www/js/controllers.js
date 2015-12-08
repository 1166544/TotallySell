angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

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

// LIST列表处理器
.controller('listCtrl', ['$scope', '$state', function($scope, $state) {
    console.log($state.params.aId);
}])
