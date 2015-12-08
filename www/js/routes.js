angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // 登录页面
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    // 注册页面
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })

    // 商城页面
    .state('shop', {
      url: '/page4',
      templateUrl: 'templates/shop.html',
      controller: 'shopCtrl'
    })

    // 购物车页面
    .state('cart', {
      url: '/page5',
      templateUrl: 'templates/cart.html',
      controller: 'cartCtrl'
    })

    // 用户设置页面
    .state('profile', {
      url: '/page6',
      templateUrl: 'templates/profile.html',
      controller: 'profileCtrl'
    })

    // 订单页面
    .state('order', {
      url: '/page7',
      templateUrl: 'templates/order.html',
      controller: 'orderCtrl'
    })

    // 主页面
    .state('main', {
      url: '/page8',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })

    // DELIVERY页面
    .state('delivery',{
      url: '/pageDelivery',
      templateUrl:'templates/delivery.html',
      controller:'deliveryCtrl'
    })

    // ABOUT页面
    .state('about',{
      url: '/pageAbout',
      templateUrl:'templates/about.html',
      controller:'aboutCtrl'
    })

    // CONTACT页面
    .state('contact',{
      url: '/pageContact',
      templateUrl:'templates/contact.html',
      controller:'contactCtrl'
    })

    // list页面
    .state('list',{
      url: '/pageList/:aId',
      templateUrl:'templates/list.html',
      controller:'listCtrl'
    })
    ;

  // 默认页面
  $urlRouterProvider.otherwise('/page1');

});
