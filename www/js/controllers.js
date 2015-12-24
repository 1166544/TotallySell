angular.module('app.controllers', ['app.services', 'app.filters'])

// 公用常量
.constant("TOP", "top")
.constant("BOTTOM", "bottom")

.controller('signupCtrl',     SignupCtrl)
.controller('shopCtrl',       ShopCtrl)
.controller('cartCtrl',       CartPageCtrl)
.controller('profileCtrl',    ProfileCtrl)
.controller('orderCtrl',      OrderCtrl)
.controller('mainCtrl',       MainCtrl)
.controller('deliveryCtrl',   DeliveryCtrl)
.controller('aboutCtrl',      AboutCtrl)
.controller('contactCtrl',    ContactCtrl)
.controller('settingCtrl',    SettingCtrl)
.controller('ProfileCtrl',    ProfileCtrl)
.controller('SocialCtrl',     SocialCtrl)
.controller('CartCtrl',       CartCtrl);


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
