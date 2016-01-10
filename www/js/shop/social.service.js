(function () {
  'use strict';
  angular
    .module('app.services')
    .service("SocialService", SocialService);

  SocialService.$inject = ["$http", "$q", "CommonFactory", "BASE_CONFIG", "SUMIATE_DATA_MODE", "CODE_CONFIG"];
  /**
   * 社交页面服务
   * @constructor
   */
  function SocialService($http, $q, CommonFactory, BASE_CONFIG, SUMIATE_DATA_MODE, CODE_CONFIG)
  {
      var socialList;
      return{
        getSocialListData:getSocialListData,
        getMinData:getMinData,
        getSocialDesc:getSocialDesc
      }

      function getSocialListData(){

        var resultData;
        var deferred = $q.defer();
        var promise = deferred.promise;

        if(SUMIATE_DATA_MODE){
          resultData = [
            {link:'#tab/social/p1', src:"img/feed_1.jpg", time:"19min", title:"He may act like he wants a secretary but most of the time they're looking for...", dsc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"},
            {link:'#tab/social/p2', src:"img/feed_3.jpg", time:"20min", title:"Peggy,just think about it.Deeply.Then forget it. And an idea will jump up in your face", dsc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"},
            {link:'#tab/social/p3', src:"img/feed_4.jpg", time:"8min", title:"Go home,take a paper bag and cut some eyeholes out of it.Put it over your head...", dsc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"},
            {link:'#tab/social/p4', src:"img/feed_5.jpg", time:"58min", title:"Get out of here and move forward.This never happened.It will shock you how mouch....", dsc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"}
          ];
          socialList = resultData;
          deferred.resolve(resultData);
          return promise;
        }
        else{
          $http.get(CommonFactory.getServerUrl("p/social/getSocialListData"))
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
          socialList = resultData;
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

      function getMinData(){

        var resultData;
        var deferred = $q.defer();
        var promise = deferred.promise;
        if(SUMIATE_DATA_MODE){
          resultData = {
            src:"img/top1.jpg",
            dsc:"My name is Peggy Olson and Iwanna smoke some marijuana."
          };
          deferred.resolve(resultData);
          return promise;
        }
        else{
          $http.get(CommonFactory.getServerUrl("p/social/getMinData"))
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
          resultData = CODE_CONFIG.OPERATE_FAIL;
          deferred.reject(resultData);
        }

      }

      /**
       * 拿详SOCIAL页详细内容
       * @param type
       * @returns {*}
       */
      function getSocialDesc(type)
      {
        var selectedItem;
        if(socialList != null){
          angular.forEach(socialList, function (item) {
            if(item.link.indexOf(type) != -1){
              selectedItem = item;
              return;
            }
          })
        }
        return selectedItem;
      }
  }

})();
