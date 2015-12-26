(function(){
  angular
    .module('app.controllers')
    .controller('CartCtrl', CartCtrl);

  CartCtrl.$inject = ["$scope", "ADD_TO_CART"];
  /**
   * 购物车控制器
   * @param $scope
   * @constructor
   */
  function CartCtrl($scope, ADD_TO_CART)
  {
    // 定义购物车列表数据
    $scope.cartDataList = [];

    // 注册添加购物车事件
    $scope.$on(ADD_TO_CART, addToCart);

    /**
     * 更新购物车数据
     * @param itemData
     */
    function addToCart(e, item)
    {
      $scope.cartDataList.push(item);
      console.log($scope.cartDataList.length);
    }
  }
})();
