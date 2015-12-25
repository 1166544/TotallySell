(function() {
  angular
    .module('app.controllers')
    .controller('listDetailCtrl', ListDetailCtrl);

  ListDetailCtrl.$inject = ['$scope', '$state', 'ListService', 'CommonFactory', 'GOOD'];
  /**
   * 列表详细页面控制器
   * @param $scope
   * @param $state
   * @constructor
   */
  function ListDetailCtrl($scope, $state, ListService, CommonFactory, GOOD)
  {
    // console.log($state.params.aId);
    var pageParm = $state.params.aId;
    $scope.detailListData = ListService.getDetailListData(pageParm);
    $scope.customerNoteData = ListService.getCustomerNoteData(pageParm, GOOD);
    $scope.colorList = CommonFactory.getColorList();
    $scope.sizeList = CommonFactory.getSizeList();
    $scope.noteCommitList = CommonFactory.getNoteCommitList();

    /**
     * 更新评论数据
     * @param type
     */
    $scope.refreshNoteData = function(type){
      $scope.customerNoteData = ListService.getCustomerNoteData(pageParm, type);
    }

    /**
     * 加入购物车
     */
    $scope.addToCart = function()
    {
      // 更新结算数据
      CartCtrl.updateCart(
        $scope.detailListData.sideShowList[0].src,
        $scope.detailListData.pName,
        $scope.detailListData.pPrice,
        $scope.detailListData.size,
        $scope.detailListData.color
      );

      // 跳至结算页面
      $state.go("tab.cart");
    }
  }
})();
