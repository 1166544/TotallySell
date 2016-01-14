(function () {
    'use strict';
    angular
      .module('app.services')
      .service('CartService', CartService);

    CartService.$inject = ["$http", "$q", "CommonFactory", "BASE_CONFIG", "CODE_CONFIG"];

    /**
     * 购物车页面服务
     * @param $http
     * @param $q
     * @param CommonFactory
     * @param BASE_CONFIG
     * @param CODE_CONFIG
     * @constructor
     */
    function CartService($http, $q, CommonFactory, BASE_CONFIG, CODE_CONFIG){
        return {
          getCartData    : getCartData,       // 获取购物车数据
          addCartData    : addCartData,       // 添加数据入购物车
          deleteCartData : deleteCartData,    // 删除购物车数据
          clearCartData  : clearCartData,     // 清空购物车数据
          updateCartData : updateCartData     // 更新购物车某一条数据
        }

        /**
         * 添加数据入购物车
         * @param item
         * @returns {FileTransferOperation.promise|*|fileTransferOps.promise|promise|AnimateRunner.promise|qFactory.Deferred.promise}
         */
        function addCartData(item){

          var resultData;
          var deferred = $q.defer();
          var promise = deferred.promise;
          var params = {};
          item.userId = CommonFactory.getUserLoginInfo().id;

          $http.post(CommonFactory.getServerUrl("p/cart/addCartData"), item, BASE_CONFIG.headers)
            .success(handleSuccess)
            .error(handleError);
          return promise;

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

        /**
         * 获取购物车内数据
         */
        function getCartData(){

           var resultData;
           var deferred = $q.defer();
           var promise = deferred.promise;

           var params = {params:{userId:CommonFactory.getUserLoginInfo().id}};
           $http.get(CommonFactory.getServerUrl("p/cart/getCartData"), params)
             .success(handleSuccess)
             .error(handleError);
           return promise;

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

        function deleteCartData(){

        }

        function clearCartData(){

        }

        function updateCartData(){

        }
    }

})();
