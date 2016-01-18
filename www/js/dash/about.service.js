(function () {
    'use strict';
    angular
      .module('app.services')
      .service("AboutService", AboutService);

    AboutService.$inject = ["$http", "$q", "CommonFactory", "BaseConfig", "AppConfig", "CodeConfig"];

    /**
     * 公司简介服务
      * @returns {{getAboutData: getAboutData}}
     * @constructor
     */
    function AboutService($http, $q, CommonFactory, BaseConfig, AppConfig, CodeConfig){

        return {
          getAboutData:getAboutData
        }

        /**
         * 公司简介数据
         * @returns {{}}
         */
        function getAboutData(){

          var resultData;
          var deferred = $q.defer();
          var promise = deferred.promise;

          if(AppConfig.SUMIATE_DATA_MODE){
            resultData = {
              src:"../../img/about.jpg",
              dsc:"Terry Richardson cardigan whatever gentrify Tumblr, gluten-free jean shorts cray Schlitz selvage DIY sustainable Helvetica sriracha.Banh mi ethical, put a bird on it VHS irony bicycle rights slow-carb literally retro skateboard ugh 90's Helvetica hashtag. Next level beard keffiyeh cornhole pork belly, slow-carb Schlitz. <br/><p>Revolutionary notebook with eco-friendly paper,advanced surface technology and digital sharing integration. </p>",
              title:"Flexible pricing plans.",
              subTitle:"to fulfill your needs and solve your problems"
            }
            deferred.resolve(resultData);
            return promise;
          }
          else{
            $http.get(CommonFactory.getServerUrl("p/dash/getAboutData"))
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
            if(angular.isArray(data)){
              resultData = data[0];
            }
            else{
              resultData = data;
            }
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
            resultData = CodeConfig.OPERATE_FAIL;
            deferred.reject(resultData);
          }
        }
    }
})();
