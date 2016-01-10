(function() {
  'use strict';
  angular
    .module('app.services')
    .service('DashService', DashService);

  DashService.$inject = ["$http", "$q", "CommonFactory", "BASE_CONFIG", "TOP", "BOTTOM", "SUMIATE_DATA_MODE", "CODE_CONFIG"];
  /**
   * 主页面服务
   * @returns {{getSideItemData: Function, getTypeListData: Function}}
   * @constructor
   */
  function DashService($http, $q, CommonFactory, BASE_CONFIG, TOP, BOTTOM, SUMIATE_DATA_MODE, CODE_CONFIG) {
    return {
      getSideItemData: getSideItemData,
      getTypeListData: getTypeListData
    }

    /**
     * 获取左边列表数据
     * @returns {{name: string, data: string}[]}
     */
    function getTypeListData() {

      var createResult;
      var deferred = $q.defer();
      var promise = deferred.promise;

      if(SUMIATE_DATA_MODE){

        var resultData = [
          {name: "FOR MEN", link: "men"},
          {name: "FOR WOMEN", link: "women"},
          {name: "FOR KIDS", link: "kids"}
        ];
        deferred.resolve(resultData);
        return promise;

      }
      else{

        $http.get(CommonFactory.getServerUrl("p/dash/getTypeListData"), BASE_CONFIG.headers)
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
        createResult = data;
        deferred.resolve(createResult);
      }

      /**
       * 处理失败
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleError(data, status, headers, config){
        createResult = CODE_CONFIG.OPERATE_FAIL;
        deferred.reject(createResult);
      }

    }

    /**
     * 获取顶部和底部数据
     * @param direction
     * @returns {*}
     */
    function getSideItemData(direction) {

      var createResult;
      var deferred = $q.defer();
      var promise = deferred.promise;

      if(SUMIATE_DATA_MODE){

        // 模拟数据
        var listData;
        switch (direction) {
          case TOP:
            listData = {name: "SUITES", quality: 88, link: "suites"};
            break;
          case BOTTOM:
            listData = {name: "DRESS", quality: 31, link: "shirts"};
            break;
        }
        deferred.resolve(listData);
        return promise;

      }
      else{

        // 真实数据
        $http.get(CommonFactory.getServerUrl("p/dash/getSideItemData"), {direction:direction})
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
          createResult = data[0];
        }
        else{
          createResult = data;
        }
        deferred.resolve(createResult);
      }

      /**
       * 处理失败
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleError(data, status, headers, config){
        createResult = CODE_CONFIG.OPERATE_FAIL;
        deferred.reject(createResult);
      }

    }
  }
})();
