/**
 * Created by Admin on 29.09.2016.
 */



var app = angular.module('app', ['ngMaterial', "fixed.table.header", 'ui.router', 'md.data.table', 'ngMessages', 'ngResource', 'ngSanitize', 'pascalprecht.translate']);






app.config(function ($locationProvider, $translateProvider, $mdDateLocaleProvider) {

    moment.locale("ru");
    var localeDate = moment.localeData();

     $mdDateLocaleProvider.months = localeDate.months();
     $mdDateLocaleProvider.shortMonths = localeDate.monthsShort();
     $mdDateLocaleProvider.days = localeDate.weekdays();
     $mdDateLocaleProvider.shortDays = localeDate.weekdaysMin();





     $mdDateLocaleProvider.formatDate = function(date) {
         var m = moment(date);
         return m.format('L');
     };



    $mdDateLocaleProvider.firstDayOfWeek = 1;






    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('ru');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

});





app.directive('ngFiles', ['$parse', function ($parse) {

  function fn_link(scope, element, attrs) {
    var onChange = $parse(attrs.ngFiles);
    element.on('change', function (event) {
      onChange(scope, { $files: event.target.files });
    });
  };

  return {
    link: fn_link
  }
} ]);








app.controller('MainCtrl', function ($scope, $state, $timeout, $translate, $rootScope) {

    $('.drawer').drawer({

        iscroll: {
            // Configuring the iScroll
            // https://github.com/cubiq/iscroll#configuring-the-iscroll
            mouseWheel: true,
            preventDefault: false,
            scrollbars: true
        },
        showOverlay: false
    });



    $timeout(function () {


    $('.drawer').drawer('open');


    }, 100);


    $('.drawer').on('drawer.opened', function(){



        $("#mainpanel").addClass("for__padding__sidebar");
        $("#titlesighnup").css("margin-left", "200px");
        $("#chartbudget").css("left", "0");
        $("#label1").css("left", "31%");
        $("#label2").css("left", "62%");
        $("#chartstructure").css("left", "5%");

    });

    $('.drawer').on('drawer.closed', function(){


        $("#mainpanel").removeClass("for__padding__sidebar");
        $("#titlesighnup").css("margin-left", "260px");
        $("#chartbudget").css("left", "8%");

        $("#label1").css("left", "33%");
        $("#label2").css("left", "58%");
        $("#chartstructure").css("left", "15%");


    });







    $rootScope.fio = localStorage.getItem('fio');



    this.exitClk = function () {

        localStorage.removeItem('tokenCSRF');
        localStorage.removeItem('sessionToken');
        localStorage.removeItem('fio');
        $rootScope.myHTML = null;
        $rootScope.fio = false;
        $state.go('login', {}, {reload: true});
    };


    this.changeLanguage = function (langKey) {
        $translate.use(langKey);

    };



$("#budget").on("click", function () {


   $("#budgetsidebar").css("display", "block");


});



    $("#execution").on("click", function () {


        $("#executionsidebar").css("display", "block");


    });






    $("#backbtn").on("click", function () {
        $("#budgetsidebar").css("display", "none");
        $("#executionsidebar").css("display", "none");
    })

    $("#backbtnexecution").on("click", function () {

        $("#executionsidebar").css("display", "none");
    })




});


