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
  }]);

