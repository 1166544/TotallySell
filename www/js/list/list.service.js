(function () {
  angular
    .module('app.services')
    .service("ListService", ListService);

  ListService.$inject = [];
  /**
   * List列表数据
   * @returns {{getListData: Function}}
   * @constructor
   */
  function ListService(){
    return {
      getListData:function(queryData){
        return [
          {link:"#tab/pageDetail/banner-1", src:"../../img/banner-1.png", title:"Common and simple", desc:"Across most current mobile OS's"},
          {link:"#tab/pageDetail/dress-b", src:"../../img/dress-b.png", title:"Be dividers to", desc:"Should be assigned to each item element. mobile OS's"},
          {link:"#tab/pageDetail/suits-b", src:"../../img/suits-b.png", title:"Create a divider for any", desc:"Line up the icon to the left, and item-icon-right to set the icon to the right. When a list item has an icon"},
          {link:"#tab/pageDetail/t-shirt-b", src:"../../img/t-shirt-b.png", title:"Different background color", desc:"The third item has no a right side icon assigned"}
        ];
      },
      getListProductData:function(queryData){
        return [
          {link:"#tab/pageDetail/p1", src:"../../img/p1.png", title:"Skull with snake", pName:"T-shirt", pPrice:"98"},
          {link:"#tab/pageDetail/p2", src:"../../img/p2.png", title:"Skull with light", pName:"Popular", pPrice:"75"},
          {link:"#tab/pageDetail/p3", src:"../../img/p3.png", title:"Skull with Fighger", pName:"Young", pPrice:"58"},
          {link:"#tab/pageDetail/p4", src:"../../img/p4.png", title:"Skull with Fork", pName:"Fshion-shirt", pPrice:"43"}
        ];
      },
      getDetailListData:function(queryData){
        return null;
      }
    }
  }
})();
