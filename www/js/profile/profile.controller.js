(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ["$scope", "$timeout", "ProfileService"];
  /**
   * 用户设置页面数据
   * @param $scope
   * @param ProfileService
   * @constructor
   */
    function ProfileCtrl($scope, $timeout, ProfileService)
  {
        $scope.profileData = ProfileService.getProfileData();
        $scope.showTip = false;

        /**
         * 更新资料
         */
        $scope.updateProfile = function()
        {
          $scope.showTip = true;
          $timeout(function () {
            $scope.showTip = false;
          }, 3000);
        }
    }
})();
