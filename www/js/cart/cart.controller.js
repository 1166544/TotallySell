(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('CartCtrl', CartCtrl);

  CartCtrl.$inject = ["$scope", '$state', 'CartService', 'CommonFactory', 'UPDATE_CART', 'SUMIATE_DATA_MODE', 'CODE_CONFIG'];
  /**
   * 购物车控制器
   * @param $scope
   * @constructor
   */
  function CartCtrl($scope, $state, CartService, CommonFactory, UPDATE_CART, SUMIATE_DATA_MODE, CODE_CONFIG)
  {
    // 定义购物车列表数据
    $scope.cartDataList = CommonFactory.cartDataList;

    // 总花费
    $scope.totalCost = 0;

    // 转换尺寸简写
    $scope.getSizeDesc = getSizeDesc;

    // 对导航数据分块处理
    switch ($state.params.aId)
    {
      // console.log($state.params.aId);
      case UPDATE_CART:
            if(SUMIATE_DATA_MODE){
              countTotalCost();
            }
            else{
              getCartData();
            }
            break;
      default :
        // 空处理，什么也不做
            break;
    }

    /**
     * 获取CART数据
     */
    function getCartData(){
      CartService.getCartData().then(onCartSuccess, onCartFail);
    }

    /**
     * 获取CART数据成功处理
     * @param result
     */
    function onCartSuccess(result){
      $scope.cartDataList = result;
      countTotalCost();
    }

    /**
     * 获取CART数据失败处理
     * @param result
     */
    function onCartFail(result){
      console.log(CODE_CONFIG.OPERATE_FAIL.msg);
    }

    /**
     * 计算总花费
      */
    function countTotalCost(){
      var total = 0;
      var item;
      for(var i=0; i < $scope.cartDataList.length; i++){
        item = $scope.cartDataList[i];
        total += parseInt(item.pPrice);
      }
      $scope.totalCost = total;
    }

    /**
     * 转换尺寸简写
     * @param str
     * @returns {*|Array.<T>|string|Blob}
     */
    function getSizeDesc(str){
      return str.slice(0,1);
    }
  }
})();
