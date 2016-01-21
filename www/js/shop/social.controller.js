(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('SocialCtrl', SocialCtrl);

  SocialCtrl.$inject = ["$scope","SocialService", "$state", "AppConfig"];
  /**
   * 社交页面控制器
   * @param $scope
   * @param SocialService
   * @constructor
   */
  function SocialCtrl($scope, SocialService, $state, AppConfig) {

      $scope.doRefresh = doRefresh;

      if(!AppConfig.SUMIATE_DATA_MODE){
        doRefresh();
      }

      function doRefresh(){
        SocialService.getSocialListData().then(onSocialListSuccess, onSocialListFail);
        SocialService.getMinData().then(onMainDataSuccess, onMainDataFail);
      }

      /**
       * 返回SocialList成功处理
       * @param result
       */
      function onSocialListSuccess(result){
        $scope.socialList = result;
      }

      /**
       * 返回SocialList失败处理
       * @param result
       */
      function onSocialListFail(result){
        $scope.socialList = result;
      }

      /**
       * 返回MainData成功处理
       * @param result
       */
      function onMainDataSuccess(result){
        $scope.mainData = result;
        $scope.$broadcast('scroll.refreshComplete');
      }

      /**
       * 返回MainData失败处理
       * @param result
       */
      function onMainDataFail(result){
        $scope.mainData = result;
        $scope.$broadcast('scroll.refreshComplete');
      }
  }
})();
