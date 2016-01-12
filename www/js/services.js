(function() {
  angular.module('app.services', ['app.controllers'])

    .factory('CommonFactory', CommonFactory);

  CommonFactory.$inject = ["GOOD","MIDDLE","BAD", "BASE_CONFIG"];
  /**
   * 公用服务内容
   * @constructor
   */
  function CommonFactory(GOOD, MIDDLE, BAD, BASE_CONFIG) {

      // 当前玩家信息
      var user;

      return {
        /**
         * 购物车数据
         */
        cartDataList: [],

        /**
         * 拼接服务器连接串
         * @param url
         * @returns {*}
         */
        getServerUrl:getServerUrl,

        /**
         * 颜色列表
         * @returns {{label: string, data: number}[]}
         */
        getColorList:getColorList,

        /**
         * 尺码列表
          * @returns {{label: string, data: number}[]}
         */
        getSizeList:getSizeList,

        /**
         * 好中差评列表
         * @returns {{label: (Function|publishExternalAPI.uppercase|*|uppercase), data: *}[]}
         */
        getNoteCommitList:getNoteComitList,

        /**
         * 拿玩家登录信息
         * @returns {*}
         */
        getUserLoginInfo:getUserLoginInfo,

        /**
         * 存取当前玩家登录状态
         * @param userInfo
         */
        saveUserLoginInfo:saveUserLoginInfo,

        /**
         * 清除存前玩家登录状态
         */
        clearUserInfo:clearUserInfo
      };

      /**
       * 拼接服务器连接串
       * @param url
       * @returns {*}
       */
      function getServerUrl(url){
        return BASE_CONFIG.serverUrl + url;
      }

      /**
       * 颜色列表
       * @returns {{label: string, data: number}[]}
       */
      function getColorList(){
        return [
          {label:"Blue", data:0},
          {label:"Green", data:1},
          {label:"Red", data:2}
        ];
      }

      /**
       * 尺码列表
       * @returns {{label: string, data: string}[]}
       */
      function getSizeList(){
        return [
          {label:"Small", data:"S"},
          {label:"Middle", data:"M"},
          {label:"Large", data:"L"}
        ];
      }

      /**
       * 好中差评列表
       * @returns {{label: string, data: *}[]}
       */
      function getNoteComitList(){
        return [
          {label:GOOD.toLocaleUpperCase(), data:GOOD},
          {label:MIDDLE.toLocaleUpperCase(), data:MIDDLE},
          {label:BAD.toLocaleUpperCase(), data:BAD}
        ];
      }

      /**
       * 存取当前玩家登录状态
       * @param userInfo
       */
      function saveUserLoginInfo(userInfo){
        user = userInfo;
      }

      /**
       * 拿玩家登录信息
       * @returns {*}
       */
      function getUserLoginInfo(){
        return user;
      }

      /**
       * 清除存前玩家登录状态
       */
      function clearUserInfo(){
        user = null;
      }
  }
})();
