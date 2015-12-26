(function() {
  angular.module('app.services', ['app.controllers'])

    .factory('CommonFactory', CommonFactory);

  CommonFactory.$inject = ["GOOD","MIDDLE","BAD"];
  /**
   * 公用服务内容
   * @constructor
   */
  function CommonFactory(GOOD, MIDDLE, BAD) {
      return {
        /**
         * 颜色列表
         * @returns {{label: string, data: number}[]}
         */
        getColorList:function(){
            return [
            {label:"Blue", data:0},
            {label:"Green", data:1},
            {label:"Red", data:2}
          ];
        },

        /**
         * 尺码列表
          * @returns {{label: string, data: number}[]}
         */
        getSizeList:function(){
          return [
            {label:"Small", data:"S"},
            {label:"Middle", data:"M"},
            {label:"Large", data:"L"}
          ];
        },

        /**
         * 好中差评列表
         * @returns {{label: (Function|publishExternalAPI.uppercase|*|uppercase), data: *}[]}
         */
        getNoteCommitList:function(){
          return [
            {label:GOOD.toLocaleUpperCase(), data:GOOD},
            {label:MIDDLE.toLocaleUpperCase(), data:MIDDLE},
            {label:BAD.toLocaleUpperCase(), data:BAD}
          ];
        }
      };
  }
})();
