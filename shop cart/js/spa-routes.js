// Routing of SPA
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"index.html",

    }).when("/shoes",{
        templateUrl:"shoes.html",

    }).when("/clothes",{
        templateUrl:"clothes.html"
    }).when("/electronics",{
        templateUrl:"electronics.html",

    }).when("/filter",{
        template:"<h1>This is SPA Demo</h1>"
    }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});