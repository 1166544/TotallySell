(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('DashCtrl', DashCtrl);

  DashCtrl.$inject = ["$scope", "DashService", "AppConfig"];

  /**
   * 主页面控制器
   * @param $scope
   * @param DashService
   * @param TOP
   * @param BOTTOM
   * @constructor
   */
  function DashCtrl($scope, DashService, AppConfig) {

    DashService.getSideItemData(AppConfig.TOP).then(getSideItemDataResult, getSideItemDataError);
    DashService.getSideItemData(AppConfig.BOTTOM).then(getSideItemDataBottomResult, getSideItemDataBottomError);
    DashService.getTypeListData().then(getTypeListDataResult, getTypeListDataError);

    function getSideItemDataResult(result){
      $scope.topItemData = result;
    }

    function getSideItemDataBottomResult(result){
      $scope.bottomItemData = result;
    }

    function getTypeListDataResult(result){
      $scope.typeListData = result;
    }

    function getSideItemDataError(error){
      // hole
    }

    function getSideItemDataBottomError(error){
      // hole
    }

    function getTypeListDataError(error){
      // hole
    }

  }

})();
