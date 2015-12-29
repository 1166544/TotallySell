(function() {
  'use strict';
  angular
    .module('app.services')
    .service('DashService', DashService);

  DashService.$inject = ["TOP", "BOTTOM"];
  /**
   * 主页面服务
   * @returns {{getSideItemData: Function, getTypeListData: Function}}
   * @constructor
   */
  function DashService(TOP, BOTTOM) {
    return {
      getSideItemData: getSideItemData,
      getTypeListData: getTypeListData
    }

    /**
     * 获取左边列表数据
     * @returns {{name: string, data: string}[]}
     */
    function getTypeListData() {
      return [
        {name: "FOR MEN", data: "men"},
        {name: "FOR WOMEN", data: "women"},
        {name: "FOR KIDS", data: "kids"}
      ];
    }

    /**
     * 获取顶部和底部数据
     * @param direction
     * @returns {*}
     */
    function getSideItemData(direction) {
      var listData;
      switch (direction) {
        case TOP:
          listData = {name: "SUITES", quality: 88, link: "suites"};
          break;
        case BOTTOM:
          listData = {name: "DRESS", quality: 31, link: "shirts"};
          break;
      }
      return listData;
    }
  }
})();
