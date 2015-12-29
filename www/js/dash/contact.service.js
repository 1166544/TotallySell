(function () {
    'use strict';
    angular
      .module('app.services')
      .service("ContactService", ContactService);

    ContactService.$inject = [];
    /**
     * CONTACT页面controller
     * @returns {{getContactData: getContactData}}
     * @constructor
     */
    function ContactService(){
        return{
          getContactData:getContactData
        }

        /**
         * 获取CONTAC数据
         */
        function getContactData(){
            return [
              {trafficName:"Bus", trafficeTime:"18:16", trafficDesc:"It was some time before he obtained any answer, and the reply, when made, was unpropitious."},
              {trafficName:"Train", trafficeTime:"20:20", trafficDesc:"It was some time before he obtained any answer."},
              {trafficName:"Airplane", trafficeTime:"22:35", trafficDesc:"It was some time before he obtained any answer."}
            ];
        }
    }
})();
