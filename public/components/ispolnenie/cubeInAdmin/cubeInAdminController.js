/**
 * Created by Admin on 29.09.2016.
 */

angular.module('app').filter('ruFormat2', function() {
    return function(x) {
        return d3.format(",.1f")(x);
    };
});


angular.module('app').controller('CubeInAdminCtrl', function ($scope, $mdDialog) {

    var locale = {
        "decimal": ",",
        "thousands": "\u00A0",
        "grouping": [3],
        "currency": ["", " тнг."],
        "dateTime": "%A, %e %B %Y г. %X",
        "date": "%d.%m.%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    };



    d3.formatDefaultLocale(locale);






    $scope.menuItems = ['2016', "2017"];

    $scope.data = {

        "2016": [


            {prg: 80, name: "Всего по администраторам", value: 109473224.0},
            {prg: 60, name: "ГУ \"Управление финансов Атырауской области\"", value: 59188042.0},
            {prg: 40, name: "ГУ \"Управление здравоохранения Атырауской области\"", value: 16595175.0},
            {prg: 30, name: "ГУ \"Областное управление образования\"", value: 5799499.0},
            {prg: 25, name: "ГУ \"Управление физической культуры и спорта Атырауской области\"", value: 4511492.0},
            {prg: 25, name: "ГУ \"Управление строительства Атырауской области \"", value: 4054391.0},
            {prg: 25, name: "ГУ \"Управление внутренних дел Атырауской области \"", value: 3332247.0},
            {prg: 25, name: "ГУ \"Управление пассажирского транспорта автомобильных дорог Атырауской области\"", value: 3132392.0},
            {prg: 25, name: "ГУ \"Управление сельского хозяйства Атырауской области\"", value: 2763344.0},
            {prg: 25, name: "ГУ \"Управление предпринимательства и индустриально инновационного развития Атырауской области\"", value: 2409156.0},
            {prg: 25, name: "ГУ \"Управление культуры, архивов и документации Атырауской области\"", value: 1989273.0},
            {prg: 25, name: "ГУ \"Аппарат акима Атырауской области\"", value: 1204945.0},
            {prg: 25, name: "ГУ \"Управление по вопросам молодежной политики\"", value: 1119986.0},
            {prg: 20, name: "ГУ \"Управление внутренней политики Атырауской области \"", value: 622406.0},
            {prg: 20, name: "ГУ \"Управление энергетики и жилищно-коммунального хозяйства Атырауской области\"", value: 493749.0},
            {prg: 20, name: "ГУ \"Управление природных ресурсов и регулирования природопользования Атырауской области\"", value: 295811.0},
            {prg: 20, name: "ГУ \"Управление архитектуры и градостроительства Атырауской области \"", value: 182670.0},
            {prg: 20, name: "ГУ \"Управление по делам религий Атырауской области \"", value: 147276.0},
            {prg: 20, name: "ГУ \"Ревизионная комиссия Атырауской области\"", value: 129793.0},
            {prg: 20, name: "ГУ \"Управление экономики и бюджетного планирования Атырауской области \"", value: 109624.0},
            {prg: 20, name: "Департамент по чрезвычайным ситуациям Атырауской области", value: 102481.0},
            {prg: 15, name: "ГУ \"Управление государственной трудовой инспекции\"", value: 47013.0},
            {prg: 15, name: "ГУ \"Аппарат Атырауского областного маслихата\"", value: 43542.0},
            {prg: 15, name: "ГУ \"Управление государственных закупок Атырауской области\"", value: 35867.0},
            {prg: 15, name: "ГУ \"Управление по развитию языков\"", value: 32612.0},
            {prg: 15, name: "ГУ \"Управление государственного архитектурно-строительного контроля Атырауской области\"", value: 33300.0},
            {prg: 15, name: "ГУ \"Управление земельных отношений Атырауской области\"", value: 23326.0},
            {prg: 15, name: "ГУ \"Управление ветеринарии Атырауской области\"", value: 26404.0},
            {prg: 5, name: "ГУ \"Управление координации занятости и социальных программ\"", value: 1012.2},
            {prg: 5, name: "ГУ \"Управление по контролю за использованием и охраной земель Атырауской области\"", value: 2064.0},



        ],


        "2017": [


            {prg: 90, name: "Всего по администраторам", value: 130057619.0},
            {prg: 60, name: "ГУ \"Управление финансов Атырауской области\"", value: 75241133.0},
            {prg: 60, name: "ГУ \"Управление здравоохранения Атырауской области\"", value: 10237136.0},
            {prg: 50, name: "ГУ \"Управление внутренних дел Атырауской области\"", value: 7189592.0},
            {prg: 50, name: "План на отчетный период ГУ \"Управление строительства Атырауской области \"", value: 8102736.0},
            {prg: 50, name: "ГУ \"Областное управление образования \"", value: 6621178.0},
            {prg: 40, name: "ГУ \"Управление физической культуры и спорта Атырауской области\"", value: 4492389.0},
            {prg: 40, name: "ГУ \"Управление архитектуры и градостроительства Атырауской области \"", value: 3479556.0},
            {prg: 40, name: "ГУ \"Управление культуры, архивов и документации Атырауской области\"", value: 3479556.0},
            {prg: 40, name: "ГУ \"Управление пассажирского транспорта автомобильных дорог Атырауской области\"", value: 3019509.0},
            {prg: 40, name: "ГУ \"Управление сельского хозяйства Атырауской области\"", value: 2557234.0},
            {prg: 35, name: "ГУ \"Управление предпринимательства и индустриально инновационного развития Атырауской области\"", value: 2534021.0},
            {prg: 35, name: "ГУ \"Аппарат акима Атырауской области\"", value: 1566616.0},
            {prg: 35, name: "ГУ \"Управление координации занятости и социальных программ\"", value: 1306483.0},
            {prg: 30, name: "ГУ \"Управление энергетики и жилищно-коммунального хозяйства Атырауской области\"", value: 869012.0},
            {prg: 30, name: "Департамент по чрезвычайным ситуациям Атырауской области", value: 772930.0},
            {prg: 30, name: "ГУ \"Управление внутренней политики Атырауской области \"", value: 720271.0},
            {prg: 30, name: "ГУ \"Управление по вопросам молодежной политики\"", value: 250800.0},
            {prg: 30, name: "ГУ \"Управление природных ресурсов и регулирования природопользования Атырауской области\"", value: 243211.0},
            {prg: 25, name: "ГУ \"Управление по делам религий Атырауской области\"", value: 164157.0},
            {prg: 25, name: "ГУ \"Ревизионная комиссия Атырауской области\"", value: 124598.0},
            {prg: 25, name: "ГУ \"Управление экономики и бюджетного планирования Атырауской области \"", value: 101989.0},
            {prg: 20, name: "ГУ \"Управление государственной трудовой инспекции\"", value: 64709.0},
            {prg: 20, name: "ГУ \"Управление государственного архитектурно-строительного контроля Атырауской области\"", value: 49643.0},
            {prg: 20, name: "ГУ \"Управление государственных закупок Атырауской области\"", value: 38431.0},
            {prg: 20, name: "ГУ \"Управление по контролю за использованием и охраной земель Атырауской области\"", value: 36469.0},
            {prg: 20, name: "ГУ \"Управление по развитию языков\"", value: 34300.0},
            {prg: 20, name: "ГУ \"Аппарат Атырауского областного маслихата\"", value: 30668.0},
            {prg: 10, name: "ГУ \"Управление земельных отношений Атырауской области\"", value: 25550.0},
            {prg: 10, name: "ГУ \"Управление ветеринарии Атырауской области\"", value: 17475.0},
        ]




    };


    $scope.activeMenu = $scope.menuItems[0];


    $scope.dataTable = $scope.data["2016"];











$scope.selectDate = function (date) {
    $scope.activeMenu = date;


    $scope.dataTable = $scope.data[date];









}




});

