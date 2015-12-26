(function () {
  angular
    .module('app.services')
    .service("ListService", ListService);

  ListService.$inject = ["GOOD","MIDDLE","BAD"];
  /**
   * List列表数据
   * @returns {{getListData: Function}}
   * @constructor
   */
  function ListService(GOOD, MIDDLE, BAD){
    return {

      /**
       * LIST列表页面SIDE SHOW内容
       * @param queryData
       * @returns {{link: string, src: string, title: string, desc: string}[]}
       */
      getListData:function(queryData){
        return [
          {link:"#tab/pageDetail/banner-1", src:"../../img/banner-1.png", title:"Common and simple", desc:"Across most current mobile OS's"},
          {link:"#tab/pageDetail/dress-b", src:"../../img/dress-b.png", title:"Be dividers to", desc:"Should be assigned to each item element. mobile OS's"},
          {link:"#tab/pageDetail/suits-b", src:"../../img/suits-b.png", title:"Create a divider for any", desc:"Line up the icon to the left, and item-icon-right to set the icon to the right. When a list item has an icon"},
          {link:"#tab/pageDetail/t-shirt-b", src:"../../img/t-shirt-b.png", title:"Different background color", desc:"The third item has no a right side icon assigned"}
        ];
      },

      /**
       * LIST列表产品数据
       * @param queryData
       * @returns {{link: string, src: string, title: string, pName: string, pPrice: string}[]}
       */
      getListProductData:function(queryData){
        return [
          {link:"#tab/pageDetail/p1", src:"../../img/p1.png", title:"Skull with snake", pName:"T-shirt", pPrice:"98"},
          {link:"#tab/pageDetail/p2", src:"../../img/p2.png", title:"Skull with light", pName:"Popular", pPrice:"75"},
          {link:"#tab/pageDetail/p3", src:"../../img/p3.png", title:"Skull with Fighger", pName:"Young", pPrice:"58"},
          {link:"#tab/pageDetail/p4", src:"../../img/p4.png", title:"Skull with Fork", pName:"Fshion-shirt", pPrice:"43"}
        ];
      },

      /**
       * 单个产品页面详细内容数据
       * @param queryData
       * @returns {{sideShowList: {src: string, title: string, desc: string}[], pName: string, pPrice: string, desc: string, size: number, color: number}}
       */
      getDetailListData:function(queryData){
        return {

          // id
          id:12345676,

          // 滚动列表
          sideShowList:[
            {src:"../../img/p-b1.png", title:"", desc:""},
            {src:"../../img/p-b2.png", title:"", desc:""},
            {src:"../../img/ps-1.png", title:"", desc:""},
            {src:"../../img/ps-2.png", title:"", desc:""},
            {src:"../../img/ps-3.png", title:"", desc:""}
          ],

          // 内容
          pName:"T-shirt",
          pPrice:"98",
          desc:"To these in the morning I sent the captain, who was to enter into a parley with them; in a word, to try them, and tell me whether he thought they might be trusted or not to go on board and surprise the ship.",
          size:"Small",
          color:"Green"

        };
      },

      /**
       * 好/中/差评数据
       * @param queryData
       * @param type
       * @returns {{src: string, name: string, note: string, agree: boolean}[]}
       */
      getCustomerNoteData:function(queryData, type){
        var listData;
        switch(type){
          case GOOD:
            listData = [
              {src:"../../img/feed_1.jpg", name:"Venkman", note:"Back off, man. I'm a popular.", agree:true},
              {src:"../../img/feed_2.jpg", name:"Egon", note:"We're gonna go call cs num.", agree:false},
              {src:"../../img/feed_3.jpg", name:"Ray", note:"Ugly little on clothes, isn't he?", agree:true},
              {src:"../../img/feed_5.jpg", name:"Tully", note:"Okay, is quality best?", agree:false}
            ];
             break;
          case MIDDLE:
            listData = [
              {src:"../../img/feed_2.jpg", name:"Egon", note:"We're gonna go call cs num.", agree:false},
              {src:"../../img/feed_5.jpg", name:"Tully", note:"Okay, is quality best?", agree:false},
              {src:"../../img/feed_4.jpg", name:"Winston", note:"That's a big Twinkie.", agree:false},
              {src:"../../img/feed_1.jpg", name:"Venkman", note:"Back off, man. I'm a popular.", agree:true}
            ];
             break;
          case BAD:
            listData = [
              {src:"../../img/feed_3.jpg", name:"Ray", note:"Ugly little on clothes, isn't he?", agree:true},
              {src:"../../img/feed_1.jpg", name:"Venkman", note:"Back off, man. I'm a popular.", agree:true},
              {src:"../../img/feed_4.jpg", name:"Winston", note:"That's a big Twinkie.", agree:false},
              {src:"../../img/feed_2.jpg", name:"Egon", note:"We're gonna go call cs num.", agree:false},
              {src:"../../img/feed_5.jpg", name:"Tully", note:"Okay, is quality best?", agree:false}
            ];
             break;
        }
        return listData;
      }

    }
  }
})();
