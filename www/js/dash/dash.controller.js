angular
  .module('app.controllers')
  .controller('DashCtrl', DashCtrl);

DashCtrl.$inject = ["$scope", "DashService", "TOP", "BOTTOM"];
/**
 * 主页面控制器
 * @param $scope
 * @param DashService
 * @param TOP
 * @param BOTTOM
 * @constructor
 */
function DashCtrl($scope, DashService, TOP, BOTTOM)
{
  $scope.topItemData = DashService.getSideItemData(TOP);
  $scope.bottomItemData = DashService.getSideItemData(BOTTOM);
  $scope.typeListData = DashService.getTypeListData();
}
