/**
 * Created by Admin on 29.09.2016.
 */

angular.module('app').filter('ruFormat2', function() {
    return function(x) {
        return d3.format(",.1f")(x);
    };
});


angular.module('app').controller('IspolCubeInSphereCtrl', function ($scope, $mdDialog) {

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


            {prg: 80, name: "Всего по направлениям", value: 229949718.0, val2: 229564849.0, val3: 99.8},
            {prg: 60, name: "Трансферты", value: 74142316.0, val2: 74142314.7, val3: 100.0},
            {prg: 40, name: "Образование", value: 50590259.8, val2: 50296070.6, val3: 99.4},
            {prg: 30, name: "Здравоохранение", value: 21258147.2, val2: 21257880.8, val3: 100.0},
            {prg: 25, name: "Жилищно-коммунальное хозяйство", value: 20952369.0, val2: 20924512.4, val3: 99.9},
            {prg: 25, name: "Транспорт и коммуникации", value: 16369121.0, val2: 16355538.6, val3: 99.9},
            {prg: 25, name: "Культура, спорт, туризм и информационное пространство", value: 12338726.7, val2: 12327110.6, val3: 99.9},
            {prg: 25, name: "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", value: 7157398.0, val2: 7153738.4, val3: 99.9},
            {prg: 25, name: "Государственные услуги общего характера", value: 6750488.6, val2: 6728291.4, val3: 99.7},
            {prg: 25, name: "Социальная помощь и социальное обеспечение", value: 6535987.0, val2: 6534062.1, val3: 100.0},
            {prg: 25, name: "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", value: 4618270.0, val2: 4614718.4, val3: 99.9},
            {prg: 25, name: "Промышленность, архитектурная, градостроительная и строительная деятельность", value: 4250397.9, val2: 4248572.9, val3: 100.0},
            {prg: 25, name: "Прочие", value: 3924672.8, val2: 3920823.9, val3: 99.9},
            {prg: 20, name: "Оборона", value: 494499.0, val2: 494182.0, val3: 99.9},
            {prg: 20, name: "Топливно-энергетический комплекс и недропользование", value: 497901.0, val2: 497896.9, val3: 100.0},
            {prg: 20, name: "Обслуживание долга", value: 69164.0, val2: 69135.6, val3: 100.0}


        ],


        "2017": [

            {prg: 80, name: "Всего по направлениям", value: 311163178.2, val2: 221863166.1, val3: 71.3},
            {prg: 60, name: "Трансферты", value: 94694807.0, val2: 75109655.1, val3: 100.0},
            {prg: 40, name: "Образование", value: 59598570.0, val2: 47347800.1, val3: 99.6},
            {prg: 30, name: "Здравоохранение", value: 40985808.0, val2: 9804376.9, val3: 97.1},
            {prg: 25, name: "Жилищно-коммунальное хозяйство", value: 39826257.0, val2: 27978342.5, val3: 98.7},
            {prg: 25, name: "Транспорт и коммуникации", value: 17814472.1, val2: 19953799.1, val3: 98.6},
            {prg: 25, name: "Культура, спорт, туризм и информационное пространство", value: 14867646.0, val2: 13577682.5, val3: 99.3},
            {prg: 25, name: "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", value: 11312936.0, val2: 8340128.6, val3: 99.8},
            {prg: 25, name: "Государственные услуги общего характера", value: 10203559.1, val2: 6435571.1, val3: 98.7},
            {prg: 25, name: "Социальная помощь и социальное обеспечение", value: 6304325.0, val2: 4924212.9, val3: 99.5},
            {prg: 25, name: "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", value: 6151318.2, val2: 3704514.6, val3: 98.4},
            {prg: 25, name: "Промышленность, архитектурная, градостроительная и строительная деятельность", value: 5326778.7, val2: 775391.1, val3: 97.0},
            {prg: 25, name: "Прочие", value: 1502190.0, val2: 2547096.6, val3: 98.7},
            {prg: 20, name: "Оборона", value: 1308265.0, val2: 563395.3, val3: 47.6},
            {prg: 20, name: "Топливно-энергетический комплекс и недропользование", value: 1203978.1, val2: 743947.9, val3: 98.4},
            {prg: 20, name: "Обслуживание долга", value: 62268.0, val2: 57251.8, val3: 100.0}

        ]




    };


    $scope.activeMenu = $scope.menuItems[0];


    $scope.dataTable = $scope.data["2016"];











$scope.selectDate = function (date) {
    $scope.activeMenu = date;


    $scope.dataTable = $scope.data[date];









}




});
