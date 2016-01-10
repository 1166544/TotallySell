(function () {
    'use strict';
    angular
      .module("app.controllers")
      .controller("AboutCtrl", AboutCtrl);

    AboutCtrl.$inject = ['$scope', 'AboutService'];

    /**
     * 公司介绍页面
     * @param $scope
     * @param AboutService
     * @constructor
     */
    function AboutCtrl($scope, AboutService){

        AboutService.getAboutData().then(onAboutSuccess, onAboutFail);

        /**
         * 返回ABOUT成功处理
         * @param result
         */
        function onAboutSuccess(result){
          $scope.aboutData = result;
        }

        /**
         * 返回ABOUT失败处理
         * @param result
         */
        function onAboutFail(result){
          $scope.aboutData = result;
        }
    }

})();
