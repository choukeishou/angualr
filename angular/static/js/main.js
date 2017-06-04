angular.module("main",["ui.roter","login","type"]).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("","/login");
    $stateProvider.state("login",{
        url:"/login",
        views:{
            "":{
                templateUrl:"tpls/login.html",
                controller:"loginCtrl"
            }
        }
    }).state('home',{
        url:'/{type:[0-9]{1,4}}',
        views:{
            '':{
                templateUrl:'tpls/home.html'
            },
            'type@home':{
                templateUrl:'tpls/type.html',
                controller:'typeCtrl'
            },
            'content@home':{
                templateUrl:'tpls/content.html',
                controller:'contentCtrl'
            }
        }
    })
}])