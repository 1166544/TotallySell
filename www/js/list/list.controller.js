(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('ListCtrl', ListCtrl);

  ListCtrl.$inject = ['$scope', '$state', 'ListService', "SUMIATE_DATA_MODE"];
  /**
   * 列表页面控制器
   * @param $scope
   * @param $state
   * @constructor
   */
  function ListCtrl($scope, $state, ListService, SUMIATE_DATA_MODE) {

    if(SUMIATE_DATA_MODE){
      // console.log($state.params.aId);
      $scope.listData = ListService.getListData($state.params.aId);
      $scope.listProductData = ListService.getListProductData($state.params.aId);
    }
    else{
      ListService.getListPageData($state.params.aId).then(onPgeDataSuccess, onPageDataFail);
    }

    /**
     * 拿列表数据成功
     * @param result
     */
    function onPgeDataSuccess(result){
      $scope.listData = result.sideData;
      $scope.listProductData = result.listData;
    }

    /**
     * 拿列表数据失败
     * @param result
     */
    function onPageDataFail(result){
      // hole
    }

  }
})();
