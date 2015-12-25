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

    $scope.refreshNoteData = function(type){
      $scope.customerNoteData = ListService.getCustomerNoteData(pageParm, type);
    }
  }
})();
