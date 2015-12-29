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
        $scope.contactData = ContactService.getContactData();
    }
})();
