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
        
      
    
      
        
    .state('tabsController.cart', {
      url: '/page5',
      views: {
        'tab2': {
          templateUrl: 'templates/cart.html',
          controller: 'cartCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.profile', {
      url: '/page6',
      views: {
        'tab3': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page3',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});