angular
  .module('app.controllers')
  .controller('listCtrl', ListCtrl);

ListCtrl.$inject = ['$scope', '$state'];
/**
 * 列表页面控制器
 * @param $scope
 * @param $state
 * @constructor
 */
function ListCtrl($scope, $state) {
  console.log($state.params.aId);
}
