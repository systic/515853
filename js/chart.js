var canvasWeek = document.getElementById('chart-week');


var dataWeek = {
    labels: ["Sun 1", "Mon 2", "Tue 3", "Thu 5", "Fri 6", "Sat 7", "Sun 8"],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(244,150,28,0.4)",
            borderColor: "rgba(244,150,28,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(244,150,28,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(244,150,28,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [3, 3, 10, 10, 20, 20, 25],
        }
    ]
};

var optionWeek = {
	showLines: true
};

Chart.defaults.global.defaultFontSize = 9;
Chart.defaults.global.defaultFontFamily = 'opensans';
Chart.defaults.global.legend.display = false;

var myLineChart = Chart.Line(canvasWeek,{
	data:dataWeek,
  options:optionWeek
});

var canvasMonth = document.getElementById('chart-month');


var dataMonth = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Noc", "Dec"],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(244,150,28,0.4)",
            borderColor: "rgba(244,150,28,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(244,150,28,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(244,150,28,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [3, 3, 10, 10, 18, 20, 25, 10, 5, 25, 17],
        }
    ]
};

var optionMonth = {
    showLines: true
};

/*Chart.defaults.global.defaultFontSize = 9;
Chart.defaults.global.defaultFontFamily = 'opensans';
Chart.defaults.global.legend.display = false;*/

var myLineChart = Chart.Line(canvasMonth,{
    data:dataMonth,
   options:optionMonth
});