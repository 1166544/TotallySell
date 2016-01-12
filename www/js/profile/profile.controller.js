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
        // 获取用户设置数据
        ProfileService.getProfileData().then(onProfileSuccess, onProfileFail);

        // 是否显示更新成功提示开关
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
         * 返回Profile成功处理
         * @param result
         */
        function onProfileSuccess(result){
          $scope.profileData = result;
        }

        /**
         * 返回Profile失败处理
         * @param result
         */
        function onProfileFail(result){
          $scope.profileData = result;
        }

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
