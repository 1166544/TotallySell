(function () {
    'use strict';
    angular
      .module("app.controllers")
      .controller("SocialSubPageCtrl", SocialSubPageCtrl);

     SocialSubPageCtrl.$inject = ['$scope', '$state', 'SocialService'];
    /**
     * 社交详细页面控制器
     * @param $scope
     * @param $state
     * @param SocialService
     * @constructor
     */
     function SocialSubPageCtrl($scope, $state, SocialService){
          // console.log($state.params.aId);
          $scope.item = SocialService.getSocialDesc($state.params.aId);
     }
})();
