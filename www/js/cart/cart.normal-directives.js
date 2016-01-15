(function () {
    'use strict';
    angular
      .module('app.directives')
      .directive('cartNormal', CartNormalDirectives);

    function CartNormalDirectives(){
        return {
          restrict:"E",
          scope:{
            item:"=data"
          },
          controller:function($scope){
            // 转换尺寸简写
            $scope.getSizeDesc = getSizeDesc;

            /**
            * 转换尺寸简写
            * @param str
            * @returns {*|Array.<T>|string|Blob}
            */
            function getSizeDesc(str){
              return str.slice(0,1);
            }
          },
          templateUrl:"templates/cart/cart-normal.html"
        };
    }

})();
