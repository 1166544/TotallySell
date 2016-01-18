(function () {
  'use strict';
  angular
    .module('app.services')
    .service("ListService", ListService);

  ListService.$inject = ["$http", "$q", "AppConfig", "CommonFactory", "CodeConfig"];
  /**
   * List列表数据
   * @returns {{getListData: Function}}
   * @constructor
   */
  function ListService($http, $q, AppConfig, CommonFactory, CodeConfig)
  {
    return {
      getListData           : getListData,
      getListProductData    : getListProductData,
      getDetailListData     : getDetailListData,
      getCustomerNoteData   : getCustomerNoteData,
      getListPageData       : getListPageData,
      getListPageDetailData : getListPageDetailData,
      getDetailNoteData     : getDetailNoteData
    }

      /**
       * LIST列表页面SIDE SHOW内容
       * @param queryData
       * @returns {{link: string, src: string, title: string, dsc: string}[]}
       */
      function getListData(queryData){
        return [
          {id:"banner-1", link:"#tab/pageDetail/banner-1", src:"../../img/banner-1.png", title:"Common and simple", dsc:"Across most current mobile OS's"},
          {id:"dress-b", link:"#tab/pageDetail/dress-b", src:"../../img/dress-b.png", title:"Be dividers to", dsc:"Should be assigned to each item element. mobile OS's"},
          {id:"suits-b", link:"#tab/pageDetail/suits-b", src:"../../img/suits-b.png", title:"Create a divider for any", dsc:"Line up the icon to the left, and item-icon-right to set the icon to the right. When a list item has an icon"},
          {id:"t-shirt-b", link:"#tab/pageDetail/t-shirt-b", src:"../../img/t-shirt-b.png", title:"Different background color", dsc:"The third item has no a right side icon assigned"}
        ];
      }

      /**
       * LIST列表产品数据
       * @param queryData
       * @returns {{link: string, src: string, title: string, pName: string, pPrice: string}[]}
       */
      function getListProductData(queryData){
        return [
          {id:"p1", link:"#tab/pageDetail/p1", src:"../../img/p1.png", title:"Skull with snake", pName:"T-shirt", pPrice:"98"},
          {id:"p2", link:"#tab/pageDetail/p2", src:"../../img/p2.png", title:"Skull with light", pName:"Popular", pPrice:"75"},
          {id:"p3", link:"#tab/pageDetail/p3", src:"../../img/p3.png", title:"Skull with Fighger", pName:"Young", pPrice:"58"},
          {id:"p4", link:"#tab/pageDetail/p4", src:"../../img/p4.png", title:"Skull with Fork", pName:"Fshion-shirt", pPrice:"43"}
        ];
      }

      /**
       * 单个产品页面详细内容数据
       * @param queryData
       * @returns {{sideShowList: {src: string, title: string, dsc: string}[], pName: string, pPrice: string, dsc: string, size: number, color: number}}
       */
      function getDetailListData(queryData){
        return {

          // id
          id:12345676,

          // 滚动列表
          sideShowList:[
            {src:"../../img/p-b1.png", title:"", dsc:""},
            {src:"../../img/p-b2.png", title:"", dsc:""},
            {src:"../../img/ps-1.png", title:"", dsc:""},
            {src:"../../img/ps-2.png", title:"", dsc:""},
            {src:"../../img/ps-3.png", title:"", dsc:""}
          ],

          // 内容
          pName:"T-shirt",
          pPrice:"98",
          dsc:"To these in the morning I sent the captain, who was to enter into a parley with them; in a word, to try them, and tell me whether he thought they might be trusted or not to go on board and surprise the ship.",
          size:"Small",
          color:"Green"

        };
      }

      /**
       * 好/中/差评数据
       * @param queryData
       * @param type
       * @returns {{src: string, name: string, note: string, agree: boolean}[]}
       */
      function getCustomerNoteData(queryData, type){
        var listData;
        switch(type){
          case AppConfig.GOOD:
            listData = [
              {src:"../../img/feed_1.jpg", name:"Venkman", note:"Back off, man. I'm a popular.", favorites:true},
              {src:"../../img/feed_2.jpg", name:"Egon", note:"We're gonna go call cs num.", favorites:false},
              {src:"../../img/feed_3.jpg", name:"Ray", note:"Ugly little on clothes, isn't he?", favorites:true},
              {src:"../../img/feed_5.jpg", name:"Tully", note:"Okay, is quality best?", favorites:false}
            ];
            break;
          case AppConfig.MIDDLE:
            listData = [
              {src:"../../img/feed_2.jpg", name:"Egon", note:"We're gonna go call cs num.", favorites:false},
              {src:"../../img/feed_5.jpg", name:"Tully", note:"Okay, is quality best?", favorites:false},
              {src:"../../img/feed_4.jpg", name:"Winston", note:"That's a big Twinkie.", favorites:false},
              {src:"../../img/feed_1.jpg", name:"Venkman", note:"Back off, man. I'm a popular.", favorites:true}
            ];
            break;
          case AppConfig.BAD:
            listData = [
              {src:"../../img/feed_3.jpg", name:"Ray", note:"Ugly little on clothes, isn't he?", favorites:true},
              {src:"../../img/feed_1.jpg", name:"Venkman", note:"Back off, man. I'm a popular.", favorites:true},
              {src:"../../img/feed_4.jpg", name:"Winston", note:"That's a big Twinkie.", favorites:false},
              {src:"../../img/feed_2.jpg", name:"Egon", note:"We're gonna go call cs num.", favorites:false},
              {src:"../../img/feed_5.jpg", name:"Tully", note:"Okay, is quality best?", favorites:false}
            ];
            break;
        }
        return listData;
      }

      /**
       * 从服务器获取列表数据
       * @param id
       */
      function getListPageData(id){

        var resultData;
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get(CommonFactory.getServerUrl("p/cart/getProductListData"), {params:{linkId:id}})
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

      /**
       * 获取产品详细信息
       * @param linkId
       * @param pName
       * @param pPrice
       */
      function getListPageDetailData(linkId, pName, pPrice){
         var resultData;
         var deferred = $q.defer();
         var promise = deferred.promise;
         var params = { linkId:linkId }
         $http.get(CommonFactory.getServerUrl("p/cart/getProductDetailData"), {params:params})
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
          resultData.id = linkId;
          resultData.pName = pName;
          resultData.pPrice = pPrice;
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

      /**
       * 获取产品评论信息
       * @param linkId
       * @param type
       */
      function getDetailNoteData(linkId, type){

        // 数据过滤
        var favorite;
        switch(type){
          case AppConfig.GOOD:
            favorite = 0;
            break;
          case AppConfig.MIDDLE:
            favorite = 1;
            break;
          case AppConfig.BAD:
            favorite = 2;
            break;
        }

        var resultData;
        var deferred = $q.defer();
        var promise = deferred.promise;
        var params = {
          linkId:linkId,
          type:favorite
        }
        $http.get(CommonFactory.getServerUrl("p/cart/getProductNotesData"), {params:params})
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
          var item;
          var i;
          var total = resultData.length;
          for(i=0; i <total; i++){
            item = resultData[i];
            if(item.hasOwnProperty("favorites")){
              item.favorites = CommonFactory.reverseBoolValue(item.favorites);
            }
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
