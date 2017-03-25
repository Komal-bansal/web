
    app.controller("todoctrl",function($scope){
        $scope.arr=[];
        $scope.addtask= function(){
            $scope.arr.push($scope.task);
        }
        $scope.deletetask=function(x){
            $scope.arr.splice(x,1);
        }
       
    });
