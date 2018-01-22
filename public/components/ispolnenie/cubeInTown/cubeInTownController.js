/**
 * Created by Admin on 29.09.2016.
 */

angular.module('app').filter('ruFormat2', function() {
    return function(x) {
        return d3.format(",.1f")(x);
    };
});


angular.module('app').controller('IspolCubeInTownCtrl', function ($scope, $mdDialog) {

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


            {prg: 80, name: "Атырау", value: 99829855.00, val2: 99796947.14, val3: 100.0},
            {prg: 60, name: "Жылыой", value: 23603752.00, val2: 23579834.18, val3: 99.9},
            {prg: 40, name: "Курмангазы", value: 8684831.20, val2: 8677935.13, val3: 99.9},
            {prg: 30, name: "Махамбет", value: 6681612.00, val2: 6677578.21, val3: 99.9},
            {prg: 25, name: "Индер", value: 5632676.10, val2: 5632166.49, val3: 100.0},
            {prg: 25, name: "Кызылкога", value: 5382815.00, val2: 5380882.96, val3: 100.0},
            {prg: 20, name: "Макат", value: 4325520.00, val2: 4325032.26, val3: 100.0},
            {prg: 15, name: "Исатай", value: 3932235.00, val2: 4325032.26, val3: 100.0}

        ],


        "2017": [

            {prg: 80, name: "Атырау", value: 155980858.00, val2: 105552479.13, val3: 67.7},
            {prg: 60, name: "Жылыой", value: 28373193.00, val2: 12563061.74, val3: 44.3},
            {prg: 40, name: "Курмангазы", value: 10284189.00, val2: 7888697.90, val3: 76.7},
            {prg: 30, name: "Махамбет", value: 9325324.00, val2: 7684705.55, val3: 82.4},
            {prg: 25, name: "Индер", value: 7484342.00, val2: 5597344.07, val3: 82.0},
            {prg: 25, name: "Кызылкога", value: 6822083.00, val2: 5700985.88, val3: 76.2},
            {prg: 25, name: "Макат", value: 6185446.00, val2: 4070236.08, val3: 78.6},
            {prg: 15, name: "Исатай", value: 5176360.00, val2: 4194695.80, val3: 67.8}

        ]




    };


    $scope.activeMenu = $scope.menuItems[0];


    $scope.yearTitle = 2016;


    $scope.dataTable = $scope.data["2016"];











$scope.selectDate = function (date) {
    $scope.activeMenu = date;
    $scope.yearTitle = date;

    $scope.dataTable = $scope.data[date];









}




});

