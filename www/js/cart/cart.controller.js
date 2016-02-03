(function () {
  'use strict';
  angular
    .module('app.controllers')
    .controller('CartCtrl', CartCtrl);

  CartCtrl.$inject = ["$scope", '$state', '$ionicActionSheet', 'CartService', 'CommonFactory', 'AppConfig', 'CodeConfig'];
  /**
   * 购物车控制器
   * @param $scope
   * @constructor
   */
  function CartCtrl($scope, $state, $ionicActionSheet, CartService, CommonFactory, AppConfig, CodeConfig) {
    // 定义购物车列表数据
    $scope.cartDataList = CommonFactory.cartDataList;

    // 总花费
    $scope.totalCost = 0;

    // 删除某一项数据
    $scope.deleteCartData = deleteCartData;

    // 清空购物车
    $scope.emptyCart = emptyCart;

    // 编辑购物车数据
    $scope.editCart = editCart;

    // console.log($state.params.aId);
    if (AppConfig.SUMIATE_DATA_MODE) {
      countTotalCost();
    }
    else {
      getCartData();
    }

    /**
     * 临时存取编辑数据
     * @param item
     */
    function editCart(item) {
      CartService.saveEditItem(item);
    }

    /**
     * 获取CART数据
     */
    function getCartData() {
      CartService.getCartData().then(onCartSuccess, onCartFail);
    }

    /**
     * 清空购物车
     */
    function emptyCart() {

      if (!AppConfig.SUMIATE_DATA_MODE) {
        var hideSheet = $ionicActionSheet.show({
          buttons: [],
          destructiveText: 'Empty',
          titleText: 'Are you sure want to empy the cart?',
          cancelText: 'Cancel',
          cancel: function () {
            hideSheet();
          },
          destructiveButtonClicked: function () {
            CartService.clearCartData().then(onClearSuccess, onCartFail);
            hideSheet();
          },
          buttonClicked: function (index) {
            return true;
          }
        });
      }

    }

    /**
     * 删除CART数据
     * @param item
     */
    function deleteCartData(item) {

      if (!AppConfig.SUMIATE_DATA_MODE) {
        var hideSheet = $ionicActionSheet.show({
          buttons: [],
          destructiveText: 'Delete',
          titleText: 'Are you sure want to delete this product?',
          cancelText: 'Cancel',
          cancel: function () {
            hideSheet();
          },
          destructiveButtonClicked: function () {
            CartService.deleteCartData(item).then(onDeleteSuccess, onCartFail);
            hideSheet();
          },
          buttonClicked: function (index) {
            return true;
          }
        });
      }

    }

    /**
     * 清空结果返回
     * @param result
     */
    function onClearSuccess(result) {

      if (result.code == CodeConfig.OPERATE_SUCCESS.code) {
        var i;
        var total = $scope.cartDataList.length;
        var item;
        for (i = 0; i < total; i++) {
          item = $scope.cartDataList[i];
          $scope.cartDataList.splice(i, 1);
        }
        console.log(result.msg);
      }

    }

    /**
     * 删除成功处理
     * @param result
     */
    function onDeleteSuccess(result) {

      if (result.code == CodeConfig.OPERATE_SUCCESS.code) {
        var i;
        var total = $scope.cartDataList.length;
        var item;
        for (i = 0; i < total; i++) {
          item = $scope.cartDataList[i];
          if (item.id == result.id) {
            $scope.cartDataList.splice(i, 1);
            break;
          }
        }
        console.log(result.msg);
      }

    }

    /**
     * 获取CART数据成功处理
     * @param result
     */
    function onCartSuccess(result) {
      $scope.cartDataList = result;
      countTotalCost();
    }

    /**
     * 获取CART数据失败处理
     * @param result
     */
    function onCartFail(result) {
      console.log(CodeConfig.OPERATE_FAIL.msg);
    }

    /**
     * 计算总花费
     */
    function countTotalCost() {
      var total = 0;
      angular.forEach($scope.cartDataList, function (value, key) {
        total += parseInt(value.pPrice) * parseInt(value.quality);
      });
      $scope.totalCost = total;
    }
  }
})();
