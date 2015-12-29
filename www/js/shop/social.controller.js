(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('SocialCtrl', SocialCtrl);

  SocialCtrl.$inject = ["$scope","SocialService"];
  /**
   * 社交页面控制器
   * @param $scope
   * @param SocialService
   * @constructor
   */
  function SocialCtrl($scope, SocialService) {
      $scope.socialList = SocialService.getSocialListData();
      $scope.mainData = SocialService.getMinData();
  }
})();
