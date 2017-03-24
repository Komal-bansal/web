// Routing of SPA
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"home.html",
//        controller:"homeCtrl"
    }).when("/shoes",{
        templateUrl:"shoes.html",
        controller:"shoesctrl"
    }).when("/clothes",{
        templateUrl:"clothes.html"
    }).when("/electronics",{
        templateUrl:"electronics.html",
   }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});
