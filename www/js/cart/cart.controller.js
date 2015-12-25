(function(){
  angular
    .module('app.controllers')
    .controller('CartCtrl', CartCtrl);

  CartCtrl.$inject = ["$scope"];
  /**
   * 购物车控制器
   * @param $scope
   * @constructor
   */
  function CartCtrl($scope)
  {
    $scope.cartDataList = [];

    /**
     * 更新购物车数据
     * @param itemData
     */
    $scope.updateCart = function(itemData){
      $scope.cartDataList.push(itemData);
    }
  }
})();
