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


  }
})();
