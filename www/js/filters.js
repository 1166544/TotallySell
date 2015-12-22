angular.module('app.filters', [])

  // 自定义单位过滤器
.filter("itemUnion", function(){
    return function(input){
      if(angular.isNumber(input) && parseInt(input) !== 0){
        return input.toString() + " Items";
      }
      else{
        return input;
      }
    }
  });
