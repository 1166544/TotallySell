(function(){
  angular
    .module('app.controllers')
    .controller('CartCtrl', CartCtrl);

  CartCtrl.$inject = ["$scope", '$state', 'CommonFactory', 'UPDATE_CART'];
  /**
   * 购物车控制器
   * @param $scope
   * @constructor
   */
  function CartCtrl($scope, $state, CommonFactory, UPDATE_CART)
  {
    // 定义购物车列表数据
    $scope.cartDataList = CommonFactory.cartDataList;

    // 总花费
    $scope.totalCost = 0;

    // 对导航数据分块处理
    switch ($state.params.aId)
    {
      // console.log($state.params.aId);
      case UPDATE_CART:
        var total = 0;
        var item;
        for(var i=0; i < $scope.cartDataList.length; i++){
          item = $scope.cartDataList[i];
          total += parseInt(item.pPrice);
        }
        $scope.totalCost = total;
            break;
      default :
        // 空处理，什么也不做
            break;
    }

    /**
     * 转换尺寸简写
     * @param str
     * @returns {*|Array.<T>|string|Blob}
     */
    $scope.getSizeDesc = function(str){
      return str.slice(0,1);
    }
  }
})();
