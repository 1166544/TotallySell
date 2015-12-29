(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('listCtrl', ListCtrl);

  ListCtrl.$inject = ['$scope', '$state', 'ListService'];
  /**
   * 列表页面控制器
   * @param $scope
   * @param $state
   * @constructor
   */
  function ListCtrl($scope, $state, ListService) {
    // console.log($state.params.aId);
    $scope.listData = ListService.getListData($state.params.aId);
    $scope.listProductData = ListService.getListProductData($state.params.aId);
  }
})();
