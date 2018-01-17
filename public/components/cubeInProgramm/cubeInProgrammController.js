/**
 * Created by Admin on 29.09.2016.
 */

angular.module('app').filter('ruFormat2', function() {
    return function(x) {
        return d3.format(",.1f")(x);
    };
});


angular.module('app').controller('CubeInProgrammCtrl', function ($scope, $mdDialog) {

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






    $scope.menuItems = ['2017', "2018", "2019"];




    $scope.activeMenu = $scope.menuItems[1];






    $scope.dataTable = [


        { name: "Всего по государственным программам", value: 120206.1, prg: 80, modalId: 1},
        { name: "Государственная программа инфраструктурного развития «Нұрлы жол» на 2015-2019 годы", value: 120206.1, prg: 80, modalId: 2},
        { name: "Государственная программа индустриально-инновационного развития Республики Казахстан на 2015-2019 годы", value: 120206.1, prg: 80, modalId: 3},
        { name: "Государственная программа \"Информационный Казахстан-2020\"", value: 120206.1, prg: 80, modalId: 4},
        { name: "Государственная программа по противодействию религиозному экстремизму и терроризму в РК на 2013-2017 годы", value: 120206.1, prg: 80, modalId: 5},
        { name: "Государственная программа развития здравоохранения РК \"Денсаулық\" на 2016-2019 годы", value: 120206.1, prg: 80, modalId: 6},
        { name: "Государственная программа развития образования и науки РК на 2016-2019 годы", value: 120206.1, prg: 80, modalId: 7},
        { name: "Государственная программа развития и функционирования языков в Республике Казахстан", value: 120206.1, prg: 80, modalId: 8},
        { name: "Государственная программа развития агропромышленного комплекса РК на 2017-2021 годы", value: 6438.8, prg: 60, modalId: 9},
        { name: "Программа по развитию сферы услуг в Республике Казахстан до 2020 года", value: 3605.0, prg: 30, modalId: 10},
        { name: "Программа жилищного строительства «Нұрлы жер» на 2017-2021 годы", value: 3270.9, prg: 30, modalId: 11},
        { name: "Единая программа поддержки и развития бизнеса «Дорожная карта бизнеса-2020»", value: 2570.9, prg: 20, modalId: 12},
        { name: "Программа \"Развития продуктивной занятости и массового предпринимательства на 2017-2021 годы\"", value: 2270.9, prg: 20, modalId: 13},
        { name: "Программа развития территории Атырауской области на 2016-2020 годы", value: 1570.8, prg: 10, modalId: 14},





    ];


$scope.selectDate = function (date) {
    $scope.activeMenu = date;
}

$scope.goToModal = function (x, ev) {


    if (x.modalId !== 1) {

        $mdDialog.show({
            controller: DialogController,
            locals:{title: x.name},
            templateUrl: `components/cubeInProgramm/${x.modalId}_tpl.html`,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        });


    }


}

function DialogController($scope, title) {


    $scope.title = title;














    $scope.closeDialog = function () {



        $mdDialog.hide();



    };

}



});

