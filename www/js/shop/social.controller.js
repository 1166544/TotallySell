(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('SocialCtrl', SocialCtrl);

  SocialCtrl.$inject = ["$scope","SocialService"];
  /**
   * 社交页面控制器
   * @param $scope
   * @param SocialService
   * @constructor
   */
  function SocialCtrl($scope, SocialService) {

      SocialService.getSocialListData().then(onSocialListSuccess, onSocialListFail);
      SocialService.getMinData().then(onMainDataSuccess, onMainDataFail);

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
      }

      /**
       * 返回MainData失败处理
       * @param result
       */
      function onMainDataFail(result){
        $scope.mainData = result;
      }
  }
})();
