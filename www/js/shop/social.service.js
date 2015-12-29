(function () {
  'use strict';
  angular
    .module('app.services')
    .service("SocialService", SocialService);

  SocialService.$inject = [];
  /**
   * 社交页面服务
   * @constructor
   */
  function SocialService()
  {
      var socialList;
      return{
        getSocialListData:getSocialListData,
        getMinData:getMinData,
        getSocialDesc:getSocialDesc
      }

      function getSocialListData(){
        var list = [
          {link:'#tab/social/p1', src:"img/feed_1.jpg", time:"19min", title:"He may act like he wants a secretary but most of the time they're looking for...", desc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"},
          {link:'#tab/social/p2', src:"img/feed_3.jpg", time:"20min", title:"Peggy,just think about it.Deeply.Then forget it. And an idea will jump up in your face", desc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"},
          {link:'#tab/social/p3', src:"img/feed_4.jpg", time:"8min", title:"Go home,take a paper bag and cut some eyeholes out of it.Put it over your head...", desc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"},
          {link:'#tab/social/p4', src:"img/feed_5.jpg", time:"58min", title:"Get out of here and move forward.This never happened.It will shock you how mouch....", desc:"He may act like he wants a secretary but most of the time they're looking forHe may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for...He may act like he wants a secretary but most of the time they're looking for......"}
        ];
        socialList = list;
        return list;
      }

      function getMinData(){
        return {
          src:"img/top1.jpg",
          desc:"My name is Peggy Olson and Iwanna smoke some marijuana."
        };
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
