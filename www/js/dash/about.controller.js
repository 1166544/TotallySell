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
        $scope.aboutData = AboutService.getAboutData();
    }
})();
