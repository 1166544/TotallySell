(function () {
    'use strict';
    angular
      .module('app.controllers')
      .controller('CartEditCtrl', CartEditCtrl);

    CartEditCtrl.$inject = ["$scope", '$state', '$ionicActionSheet', 'CartService', 'CommonFactory', 'AppConfig', 'CodeConfig'];

    /**
     * 购物车编辑数据控制器
     * @param $scope
     * @param $state
     * @param $ionicActionSheet
     * @param CartService
     * @param CommonFactory
     * @constructor
     */
    function CartEditCtrl($scope, $state, $ionicActionSheet, CartService, CommonFactory, AppConfig, CodeConfig){

        // console.log($state.params.aId);
        $scope.colorList = CommonFactory.getColorList();
        $scope.sizeList = CommonFactory.getSizeList();
        $scope.editData = CartService.getEditData(parseInt($state.params.aId));

        $scope.saveToCart = saveToCart;

        /**
         * 保存编辑数据入数据库
         */
        function saveToCart(){
            if(!AppConfig.SUMIATE_DATA_MODE){
              CartService.updateCartData($scope.editData).then(onUpdateSuccess, onUpdateFail);
            }
        }

        /**
         * 更新成功
         * @param result
         */
        function onUpdateSuccess(result){
            if(result.code === CodeConfig.OPERATE_SUCCESS.code){
              $state.go("tab.cart");
            }
        }

        /**
         * 更新失败
         * @param result
         */
        function onUpdateFail(result){
            // hole
        }

    }

})();
