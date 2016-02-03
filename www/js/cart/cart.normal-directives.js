(function () {
    'use strict';
    angular
      .module('app.directives')
      .directive('cartNormal', CartNormalDirectives);

    function CartNormalDirectives(){
        return {
          restrict:"E",
          scope:{
            item: "=data"
          },
          controller:function($scope){
            // 转换尺寸简写
            $scope.getSizeDesc = getSizeDesc;

            // 依据尺寸返回颜色背景样式
            $scope.getSizeClass = getSizeClass;

            function getSizeClass(size){
              var className;
              switch (size){
                case "Large":
                  className = "total-cart-size-b";
                  break;
                case "Middle":
                  className = "total-cart-size-m";
                  break;
                case "Small":
                  className = "total-cart-size-s";
                  break;
              }
              return className;
            }

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
