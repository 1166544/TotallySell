angular
  .module('app.controllers')
  .controller('listDetailCtrl', ListDetailCtrl);

ListDetailCtrl.$inject = ['$scope', '$state'];
/**
 * 列表详细页面控制器
 * @param $scope
 * @param $state
 * @constructor
 */
function ListDetailCtrl($scope, $state) {
  console.log($state.params.aId);
}
