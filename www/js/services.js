angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

/**
 * 登录服务
 */
.service('LoginService',[function(){
    return {
      login:function(userName, password){
        // TODO:从数据库拿用户名和MD5密码较验
        if(userName == "xxd" && password == "xxd"){
          return true;
        }
        else{
          return false;
        }
      }
    }
  }])

/**
 * 主页面服务
 */
.service('DashService',[function(){
    return {
      getSideItemData:function(direction){
        var listData;
        switch (direction){
          case "top":
            listData = {name:"SUITES", quality:88, link:"suites"};
            break;
          case "bottom":
            listData = {name:"DRESS", quality:31, link:"shirts"};
            break;
        }
        return listData;
      },
      getTypeListData:function(){
        return [
          {name:"FOR MEN", data:"men"},
          {name:"FOR WOMEN", data:"women"},
          {name:"FOR KIDS", data:"kids"}
        ];
      }
    }
  }]);

