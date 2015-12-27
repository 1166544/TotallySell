(function(){
  angular
    .module('app.controllers')
    .controller('CartCtrl', CartCtrl);

  CartCtrl.$inject = ["$scope", 'CommonFactory'];
  /**
   * 购物车控制器
   * @param $scope
   * @constructor
   */
  function CartCtrl($scope, CommonFactory)
  {
    // 定义购物车列表数据
    $scope.cartDataList = CommonFactory.cartDataList;

    // 总花费
    $scope.totalCost = 0;

    /**
     * 转换尺寸简写
     * @param str
     * @returns {*|Array.<T>|string|Blob}
     */
    $scope.getSizeDesc = function(str){
      return str.slice(0,1);
    }

    /**
     * 计算总花费
     * @returns {*}
     */
    $scope.getTotalCoast = function(){
      var total;
      var item;
      for(var i=0; i < $scope.cartDataList.length; i++){
        item =$scope.cartDataList[i];
        total += parseInt(item.pPrice);
      }
      return total;
    }
  }
})();
