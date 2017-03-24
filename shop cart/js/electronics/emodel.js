app.factory("electronicsfactory", function ($q, $http) {
    var object = {
        callServer: function () {
            var result = $q.defer();

            function success(data) {
                result.resolve(data);
            }

            function failure(err) {
                result.reject(err);
            }

            $http.get('server/electronics.json').then(success, failure);
            return result.promise;
        }


    };
    return object;
})

//app.factory("electronicsfactory",function($q,$http){
//    var object = {
//         
//        callServer:function(scope){
//        //var result = "NO RESULT RIGHT NOW ";
//        $http.get('server/electronics.json').success(function(data){
//         scope.info = data;
//           // result = data;
//            //alert("Here is the result "+result);
//         }).error(function(error){
//            scope.info = error;
//            //result = error;
//            //alert("Here is the Error "+result);
//         })   
//        //alert("I am Going to Return "+result);    
//         //return result;
//}
//    }
//    return object;
//    });