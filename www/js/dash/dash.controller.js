(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('DashCtrl', DashCtrl);

  DashCtrl.$inject = ["$scope", "$state", "DashService", "AppConfig"];

  /**
   * 主页面控制器
   * @param $scope
   * @param DashService
   * @param TOP
   * @param BOTTOM
   * @constructor
   */
  function DashCtrl($scope, $state, DashService, AppConfig) {

    var vm = $scope;
    vm.serachStr = "suites";
    vm.doSearch = doSearch;

    DashService.getSideItemData(AppConfig.TOP).then(getSideItemDataResult, getSideItemDataError);
    DashService.getSideItemData(AppConfig.BOTTOM).then(getSideItemDataBottomResult, getSideItemDataBottomError);
    DashService.getTypeListData().then(getTypeListDataResult, getTypeListDataError);

    /**
     * 搜索操作
     */
    function doSearch(){
      if(vm.serachStr === "" || vm.serachStr === null) return;
      $state.go("tab.list", {aId:vm.serachStr});
      vm.serachStr = "";
    }

    function getSideItemDataResult(result){
      vm.topItemData = result;
    }

    function getSideItemDataBottomResult(result){
      vm.bottomItemData = result;
    }

    function getTypeListDataResult(result){
      vm.typeListData = result;
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
