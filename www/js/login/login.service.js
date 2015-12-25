(function() {
  angular
    .module('app.services')
    .service('LoginService', LoginService);

  LoginService.$inject = [];
  /**
   * 登录服务
   * @returns {{login: Function}}
   * @constructor
   */
  function LoginService() {
    return {
      login: function (userName, password) {
        // TODO:从数据库拿用户名和MD5密码较验
        if (userName == "xxd" && password == "xxd") {
          return true;
        }
        else {
          return false;
        }
      }
    }
  }
})();
