/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('LoginCtrl', function ($scope, GetToken, SendAuth, $mdToast, $state, $rootScope) {





  this.loginClk = function () {





            $state.go("main");










  };

});

