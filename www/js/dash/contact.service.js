(function () {
    'use strict';
    angular
      .module('app.services')
      .service("ContactService", ContactService);

    ContactService.$inject = ["$http", "$q", "CommonFactory", "BASE_CONFIG", "SUMIATE_DATA_MODE", "CODE_CONFIG"];

    /**
     * CONTACT页面controller
     * @returns {{getContactData: getContactData}}
     * @constructor
     */
    function ContactService($http, $q, CommonFactory, BASE_CONFIG, SUMIATE_DATA_MODE, CODE_CONFIG){

        return{
          getContactData:getContactData
        }

        /**
         * 获取CONTACT数据
         */
        function getContactData(){

            var resultData;
            var deferred = $q.defer();
            var promise = deferred.promise;

            if(SUMIATE_DATA_MODE){
              resultData = [
                {trafficName:"Bus", trafficeTime:"18:16", trafficDesc:"It was some time before he obtained any answer, and the reply, when made, was unpropitious."},
                {trafficName:"Train", trafficeTime:"20:20", trafficDesc:"It was some time before he obtained any answer."},
                {trafficName:"Airplane", trafficeTime:"22:35", trafficDesc:"It was some time before he obtained any answer."}
              ]
              deferred.resolve(resultData);
              return promise;
            }
            else{
              $http.get(CommonFactory.getServerUrl("p/dash/getContactData"))
                .success(handleSuccess)
                .error(handleError);
              return promise;
            }

            /**
             * 处理成功
             * @param data
             * @param status
             * @param headers
             * @param config
             */
            function handleSuccess(data, status, headers, config) {
              resultData = data;
              deferred.resolve(resultData);
            }

            /**
             * 处理失败
             * @param data
             * @param status
             * @param headers
             * @param config
             */
            function handleError(data, status, headers, config){
              resultData = CODE_CONFIG.OPERATE_FAIL;
              deferred.reject(resultData);
            }
        }
    }
})();
