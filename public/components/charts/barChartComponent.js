



function testTest(data, idElem, titleCard, changeDataChartArr) {


let labelSpan = "";

    for (let changeDataChartArrItem of changeDataChartArr) {

        labelSpan += `<span class="label dateTitle" data-dateval="${changeDataChartArrItem}">${changeDataChartArrItem}</span>`


    }


let templateForChart = `<md-card class="text-center">



 <div class="row">
 
 
                    <div class="col-md-12 custom__label__date text-right">
                        
                        ${labelSpan}

                    </div>

                </div>




<h3 class="title" style="text-transform: uppercase">${titleCard}</h3>


<div id="${idElem}"></div></md-card>`;

$("#title").after(templateForChart);




   var charBar = bb.generate({

        bindto: "#" + idElem,

        data: {
            columns: data,

            type: 'bar'

        },


        legend: {
            show: true
        },


        bar: {
            width: {
                ratio: 0.5
            }

        },


        grid: {
            x: {
                show: false
            },
            y: {
                show: false
            }
        },

        axis: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        },
        labels: {

            format: function (val) {
                return d3.format(",.2f")(val);
            }
        },
        tooltip: {
            show: true,
            format: {

                value: d3.format(",.2f")
            }
        }


    });







    //Это ивент, для дат
    $(".dateTitle").on("click", function () {



        $(this).

        for (let dateItem of changeDataChartArr) {
            if (dateItem === $(this).data("dateTitle")) {


                charBar.load();
            }
        }



    });


}


