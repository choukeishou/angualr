angular.module("login",[])
.controller("loginCtrl",["$scope","$state","$timeout",function($scope,$state,$timeout){
    $scope.items=[1,2,3,4]
    $scope.goHome=function(){
        console.log(11)
            // $state.go("#!/home");
            window.location.href="#!/0"
    }
}])