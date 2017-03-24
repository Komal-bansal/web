app.factory("shoesfactory", function ($q, $http) {
    var object = {
        callServer: function () {
            var result = $q.defer();

            function success(data) {
                result.resolve(data);
            }

            function failure(err) {
                result.reject(err);
            }

            $http.get('server/shoes.json').then(success, failure);
            return result.promise;
        }


    };
    return object;
})