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


app.filter('ruFormat', function() {
    return function(x) {
        return d3.format(",.2f")(x);
    };
});





app.controller('MainCtrl', function ($scope, $state, $timeout, $translate, $rootScope) {

    var arrDigit = ["400 000", "200 000", "300 000", "652 000"];
    var arrDigitText = ["Расходы на 2018", "Доходы на 2018", "Образование", "Оборона"];




    setInterval(function () {

        $("#digit").text(arrDigit[Math.floor(Math.random()*arrDigit.length)]);
        $("#digtext").text(arrDigitText[Math.floor(Math.random()*arrDigitText.length)]);


        var tl = new TimelineLite,
            mySplitText = new SplitText("#digit", {type:"words,chars"}),
            mySplitText2 = new SplitText("#digtext", {type:"words,chars"}),
            chars = mySplitText.chars, //an array of all the divs that wrap each character
            chars2 = mySplitText2.chars; //an array of all the divs that wrap each character

        TweenLite.set("#digit", {perspective:400});
        TweenLite.set("#digtext", {perspective:400});

        tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
        tl.staggerFrom(chars2, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");




        tl.restart();



    }, 5000);










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

        $("#label1").css("left", "31%");
        $("#label2").css("left", "62%");
        $("#chartstructure").css("left", "5%");




        $timeout(function () {
            $("#structurerashod").addClass("open");
            $("#structurerashod > a").attr("aria-expanded", true);


            $("#ispolstructurerashod").addClass("open");
            $("#ispolstructurerashod > a").attr("aria-expanded", true);



        }, 50);


    });

    $('.drawer').on('drawer.closed', function(){


        $("#mainpanel").removeClass("for__padding__sidebar");
        $("#titlesighnup").css("margin-left", "260px");


        $("#label1").css("left", "33%");
        $("#label2").css("left", "62%");
        $("#chartstructure").css("left", "15%");



        $("#tooltip").css("left", "25%");


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




    $(".noexpandesidebar").on("click", function () {


        $timeout(function () {
            $("#structurerashod").addClass("open");
            $("#structurerashod > a").attr("aria-expanded", true);


            $("#ispolstructurerashod").addClass("open");
            $("#ispolstructurerashod > a").attr("aria-expanded", true);

            $("#sar").addClass("open");
            $("#sar > a").attr("aria-expanded", true);


        }, 50);





    });






$("#budget").on("click", function () {


   $("#budgetsidebar").css("display", "block");





   $timeout(function () {
       $("#structurerashod").addClass("open");
       $("#structurerashod > a").attr("aria-expanded", true);

   }, 50);







});



    $("#execution").on("click", function () {


        $("#executionsidebar").css("display", "block");



        $timeout(function () {
            $("#ispolstructurerashod").addClass("open");
            $("#ispolstructurerashod > a").attr("aria-expanded", true);

        }, 50);


    });






    $("#backbtn").on("click", function () {
        $("#budgetsidebar").css("display", "none");
        $("#executionsidebar").css("display", "none");
    })

    $("#backbtnexecution").on("click", function () {

        $("#executionsidebar").css("display", "none");
    })



    $scope.getColor = function () {



        $("#mainnavbar").css("background", $scope.colorheader);
    }



    $scope.getColorSideBar = function () {



        $(".drawer-nav").css("background", $scope.colorsidebar);
    }







});


