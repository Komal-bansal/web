app.controller("electronicsctrl",function($scope,electronicsfactory){
    var promise = electronicsfactory.callServer($scope); 
    // Do Something else
    for(var i= 1; i<=10; i++){
        console.log("I is ",i);
    }
    console.log("Now i am checking the Promise");
    promise.then(function(data){
       $scope.result=  data;
        console.log($scope.result);
    },function (error){
         $scope.result=  error;
    });
   // alert("Result is "+result);
});

//app.controller("electronicsctrl",function($scope,electronicsfactory){
//   
//   var promise = electronicsfactory.callServer();
//    for(var i = 1 ; i<=10; i++){
//        console.log("Loop "+i);
//    }
//    function success(data){
//        $scope.electronicsList = data;
//    } 
//    function error(error){
//        $scope.errors = error;
//    }    
//    promise.then(success,error);    
//        //$scope.friendList = friendData;
//        
//});
//
//promise.then(function(data){
//       $scope.result=  data;
//        console.log($scope.result);
//    },function (error){
//         $scope.result=  error;
//    });