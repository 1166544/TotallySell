(function () {
    'use strict';
    angular
      .module("app.controllers")
      .controller("ContactCtrl", ContactCtrl);

    ContactCtrl.$inject = ['$scope', 'ContactService'];

    /**
     * CONTACT页面CONTROLLER
     * @param $scope
     * @param ContactService
     * @constructor
     */
    function ContactCtrl($scope, ContactService){

        ContactService.getContactData().then(onContactSuccess, onContactFail);
        /**
         * 返回CONTACT成功处理
         * @param result
         */
        function onContactSuccess(result){
          $scope.contactData = result;
        }

        /**
         * 返回CONTACT失败处理
         * @param result
         */
        function onContactFail(result){
          $scope.contactData = result;
        }

    }

})();
