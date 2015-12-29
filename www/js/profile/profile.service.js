(function () {
    'use strict';
    angular
      .module('app.services')
      .service("ProfileService", ProfileService);

    ProfileService.$inject = [];
    /**
     * Profile页面service
     * @constructor
     */
    function ProfileService(){
        return {
          getProfileData:function(){
            return{
              callEnable:true,
              messageEnable:false,
              geoEnable:true,
              firstName:"james",
              lastName:"liauw",
              email:"jamesliauw@163.com",
              phone:"0123456",
              address:"the earth village"
            }
          }
        }
    }
})();
