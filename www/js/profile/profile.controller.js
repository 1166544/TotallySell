(function(){
  'use strict';
  angular
    .module('app.controllers')
    .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ["$scope", "$state", "$timeout", "ProfileService", "CommonFactory"];
  /**
   * 用户设置页面数据
   * @param $scope
   * @param ProfileService
   * @constructor
   */
    function ProfileCtrl($scope, $state, $timeout, ProfileService, CommonFactory)
  {
        $scope.profileData = ProfileService.getProfileData();
        $scope.showTip = false;

        /**
         * 更新资料
         */
        $scope.updateProfile = updateProfile;

        /**
         * 退出登录
         */
        $scope.logOut = logOut;

        /**
         * 更新资料
         */
        function updateProfile()
        {
          $scope.showTip = true;
          $timeout(function () {
            $scope.showTip = false;
          }, 3000);
        }

        /**
         * 退出登录
         */
        function logOut(){
          CommonFactory.clearUserInfo();
          $state.go("login");
        }
    }
})();
