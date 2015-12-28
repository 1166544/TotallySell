(function(){
  angular
    .module('app.controllers')
    .controller('signupCtrl', SignupCtrl);

  SignupCtrl.$inject = ["$scope", "$state"];
  /**
   * 注册新用户逻辑
   * @param $scope
   * @constructor
   */
  function SignupCtrl($scope, $state) {

    /**
     * 表单提交数据
     * @type {{}}
     */
    $scope.signUpData = {
      firstName:"",
      lastName:"",
      password:"",
      email:"",
      phone:"",
      address:""
    };

    /**
     * 重置操作
     */
      $scope.reset = function(){
        $scope.signUpData = {
          firstName:"",
          lastName:"",
          password:"",
          email:"",
          phone:"",
          address:""
        };
      }

    /**
     * 提交表单操作
     */
      $scope.signUp = function(){
        $state.go("tab.dash");
        $scope.reset();
      }
  }
})();
