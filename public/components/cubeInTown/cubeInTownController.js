/**
 * Created by Admin on 29.09.2016.
 */

angular.module('app').filter('ruFormat2', function() {
    return function(x) {
        return d3.format(",.1f")(x);
    };
});


angular.module('app').controller('CubeInTownCtrl', function ($scope, $mdDialog) {

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


            {prg: 80, name: "Атырау", value: 99829855.00},
            {prg: 60, name: "Жылыой", value: 23603752.00},
            {prg: 40, name: "Курмангазы", value: 8684831.20},
            {prg: 30, name: "Махамбет", value: 6681612.00},
            {prg: 25, name: "Индер", value: 5632676.10},
            {prg: 25, name: "Кызылкога", value: 5382815.00},
            {prg: 20, name: "Макат", value: 4325520.00},
            {prg: 15, name: "Исатай", value: 3932235.00}

        ],


        "2017": [

            {prg: 80, name: "Атырау", value: 155980858.00},
            {prg: 60, name: "Жылыой", value: 28373193.00},
            {prg: 40, name: "Курмангазы", value: 10284189.00},
            {prg: 30, name: "Махамбет", value: 9325324.00},
            {prg: 25, name: "Индер", value: 7484342.00},
            {prg: 25, name: "Кызылкога", value: 6822083.00},
            {prg: 25, name: "Макат", value: 6185446.00},
            {prg: 15, name: "Исатай", value: 5176360.00}

        ]




    };


    $scope.activeMenu = $scope.menuItems[0];


    $scope.dataTable = $scope.data["2016"];











$scope.selectDate = function (date) {
    $scope.activeMenu = date;


    $scope.dataTable = $scope.data[date];









}




});

