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

        var editItem;

        return {
          getCartData    : getCartData,       // 获取购物车数据
          addCartData    : addCartData,       // 添加数据入购物车
          deleteCartData : deleteCartData,    // 删除购物车数据
          clearCartData  : clearCartData,     // 清空购物车数据
          updateCartData : updateCartData,    // 更新购物车某一条数据
          saveEditItem : saveEditItem,        // 临时存取编辑数据
          getEditData : getEditData           // 获取编辑数据
        }

        /**
         * 临时存取编辑数据
          * @param item
         */
         function saveEditItem(item){
           editItem = angular.copy(item);
           console.log(editItem);
         }

        /**
         * 获取编辑数据
         * @param id
         */
         function getEditData(id){
            if(editItem && editItem.id === id){
              return editItem;
            }
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

        /**
         * 删除购物车某一项数据
         */
        function deleteCartData(item){

          var resultData;
          var deferred = $q.defer();
          var promise = deferred.promise;

          var params = {
            productId:item.id,
            userId:CommonFactory.getUserLoginInfo().id
          };
          $http.post(CommonFactory.getServerUrl("p/cart/deleteCartData"), params, BASE_CONFIG.headers)
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
            resultData.id = item.id;
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
         * 清空购物车
         * @returns {FileTransferOperation.promise|*|fileTransferOps.promise|promise|AnimateRunner.promise|qFactory.Deferred.promise}
         */
        function clearCartData(){

          var resultData;
          var deferred = $q.defer();
          var promise = deferred.promise;

          var params = {
            userId:CommonFactory.getUserLoginInfo().id
          };
          $http.post(CommonFactory.getServerUrl("p/cart/clearCartData"), params, BASE_CONFIG.headers)
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
         * 更新购物车某一条数据
         * @param item
         */
        function updateCartData(item){

            var resultData;
            var deferred = $q.defer();
            var promise = deferred.promise;

            if(!item.hasOwnProperty("userId")){
                item.userId = CommonFactory.getUserLoginInfo().id;
            }

            $http.post(CommonFactory.getServerUrl("p/cart/updateCartData"), item, BASE_CONFIG.headers)
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

    }

})();
