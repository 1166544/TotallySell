(function () {
    'use strict';
    angular
      .module('app.services')
      .service("ProfileService", ProfileService);

    ProfileService.$inject = ["$http", "$q", "CommonFactory", "BASE_CONFIG", "SUMIATE_DATA_MODE", "CODE_CONFIG"];
    /**
     * Profile页面service
     * @constructor
     */
    function ProfileService($http, $q, CommonFactory, BASE_CONFIG, SUMIATE_DATA_MODE, CODE_CONFIG){

        return {
          getProfileData : getProfileData
        }

        function getProfileData(userId){

          var resultData;
          var deferred = $q.defer();
          var promise = deferred.promise;

          if(SUMIATE_DATA_MODE){
            resultData = {
              callEnable:true,
              messageEnable:false,
              geoEnable:true,
              name:"james",
              lastName:"liauw",
              email:"jamesliauw@163.com",
              phone:"0123456",
              address:"the earth village"
            };
            deferred.resolve(resultData);
            return promise;
          }
          else{
            // 依据ID查询当前用户设置数据
            $http.get(CommonFactory.getServerUrl("p/profile/getUser"), {params:{id:CommonFactory.getUserLoginInfo().id}})
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
              resultData.callEnable = Boolean(resultData.callEnable);
              resultData.messageEnable = Boolean(resultData.messageEnable);
              resultData.geoEnable = Boolean(resultData.geoEnable);
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
            resultData = CODE_CONFIG.OPERATE_FAIL;
            deferred.reject(resultData);
          }

        }

    }
})();
