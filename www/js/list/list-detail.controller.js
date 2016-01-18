(function() {
  'use strict';
  angular
    .module('app.controllers')
    .controller('ListDetailCtrl', ListDetailCtrl);

  ListDetailCtrl.$inject = ['$scope', '$state', 'ListService', 'CartService', 'CommonFactory', 'AppConfig', 'CodeConfig'];
  /**
   * 列表详细页面控制器
   * @param $scope
   * @param $state
   * @constructor
   */
  function ListDetailCtrl($scope, $state, ListService, CartService, CommonFactory, AppConfig, CodeConfig)
  {
    // console.log($state.params.aId);
    var linkId = $state.params.aId;
    var pName = $state.params.pName;
    var pPrice = $state.params.pPrice;

    $scope.colorList = CommonFactory.getColorList();
    $scope.sizeList = CommonFactory.getSizeList();
    $scope.noteCommitList = CommonFactory.getNoteCommitList();

    $scope.refreshNoteData = refreshNoteData;
    $scope.addToCart = addToCart;

    if(AppConfig.SUMIATE_DATA_MODE){
        $scope.detailListData = ListService.getDetailListData(linkId);
        $scope.customerNoteData = ListService.getCustomerNoteData(linkId, AppConfig.GOOD);
    }
    else{
        ListService.getListPageDetailData(linkId, pName, pPrice).then(onDetailSuccess, onDetailFail);
        ListService.getDetailNoteData(linkId, AppConfig.GOOD).then(onNoteDataSuccess, onDetailFail);
    }

    /**
     * 更新评论数据
     * @param type
     */
    function refreshNoteData(type){
      if(AppConfig.SUMIATE_DATA_MODE){
        $scope.customerNoteData = ListService.getCustomerNoteData(1, type);
      }
      else{
        ListService.getDetailNoteData(linkId, type).then(onNoteDataSuccess, onDetailFail);
      }
    }

    /**
     * 加入购物车
     */
    function addToCart()
    {

      // 更新结算数据
      var item = {
        id:$scope.detailListData.id,
        src:$scope.detailListData.sideShowList[0].src,
        pName:$scope.detailListData.pName,
        pPrice:$scope.detailListData.pPrice,
        size:$scope.detailListData.size,
        color:$scope.detailListData.color,
        quality:1
      };
      if(AppConfig.SUMIATE_DATA_MODE){
        // 跳至结算页面,并传入计算总价位参数
        CommonFactory.cartDataList.push(item);
        $state.go("tab.cart", {aId:AppConfig.UPDATE_CART});
      }
      else{
        // 将数据存入后台数据库,并传入计算总价位参数
        CartService.addCartData(item).then(onAddSuccess, onDetailFail);
      }

    }

    /**
     * 添加入购物车成功
     * @param result
     */
    function onAddSuccess(result){
      if(result.code == CodeConfig.OPERATE_SUCCESS.code){
        $state.go("tab.cart", {aId:AppConfig.UPDATE_CART});
      }
      else{
        console.log(CodeConfig.OPERATE_FAIL.msg);
      }
    }

    /**
     * 详细数据获取成功
     * @param result
     */
    function onDetailSuccess(result){
      $scope.detailListData = result;
    }

    /**
     * 评论数据获取成功
     * @param result
     */
    function onNoteDataSuccess(result){
      $scope.customerNoteData = result;
    }

    /**
     * 数据获取失败
     * @param result
     */
    function onDetailFail(result){
      // hole
    }
  }
})();
