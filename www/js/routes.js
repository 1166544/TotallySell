angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.social', {
      url: '/social',
      views: {
        'tab-social': {
          templateUrl: 'templates/tab-social.html',
          controller: 'SocialCtrl'
        }
      }
    })

    .state('tab.cart', {
      url: '/cart',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-cart.html',
          controller: 'CartCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

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

    // 购物车页面
    .state('cart', {
      url: '/page5',
      templateUrl: 'templates/tab-tab-cart.html',
      controller: 'cartCtrl'
    })

    // DELIVERY页面
    .state('tab.delivery', {
      url: '/pageDelivery',
      views: {
        'tab-dash': {
          templateUrl: 'templates/delivery.html',
          controller: 'deliveryCtrl'
        }
      }
    })

    // ABOUT页面
    .state('tab.about',{
      url: '/pageAbout',
      views:{
        'tab-dash':{
          templateUrl:'templates/about.html',
          controller:'aboutCtrl'
        }
      }
    })

    // CONTACT页面
    .state('tab.contact',{
      url: '/pageContact',
      views:{
        'tab-dash':{
          templateUrl:'templates/contact.html',
          controller:'contactCtrl'
        }
      }
    })

    // list页面
    .state('tab.list',{
      url: '/pageList/:aId',
      views:{
        'tab-dash':{
          templateUrl:'templates/list.html',
          controller:'listCtrl'
        }
      }
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
    ;

  // 默认页面
  $urlRouterProvider.otherwise('/page1');

});
