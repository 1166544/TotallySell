angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('shop', {
      url: '/page4',
      templateUrl: 'templates/shop.html',
      controller: 'shopCtrl'
    })
        
      
    
      
        
    .state('cart', {
      url: '/page5',
      templateUrl: 'templates/cart.html',
      controller: 'cartCtrl'
    })
        
      
    
      
        
    .state('profile', {
      url: '/page6',
      templateUrl: 'templates/profile.html',
      controller: 'profileCtrl'
    })
        
      
    
      
        
    .state('order', {
      url: '/page7',
      templateUrl: 'templates/order.html',
      controller: 'orderCtrl'
    })
        
      
    
      
        
    .state('main', {
      url: '/page8',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});