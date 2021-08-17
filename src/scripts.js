window.onload = () => {
  let data, options, chart;
  
  google.charts.load( 'current', { 'packages': ['corechart'] } );
  google.charts.setOnLoadCallback( drawChart );
  
  function drawChart() {
    data = google.visualization.arrayToDataTable([
      ['Day', 'Backlog', "To Do", 'In Progress', 'Done'],
      ['16/08/2021', 100, 50, 25, 25],
      ['17/08/2021', 100, 60, 40, 35],
      ['17/08/2021', 125, 60, 40, 10],
    ]);
  
    options = {
      title: 'CFD - Lab62',

      hAxis: {
        titleTextStyle: {
          color: '#333'
        }
      },

      vAxis: {
        minValue: 0,
      },

      series: {
        0: {
          color: '#304ffe',
        },

        1: {
          color: '#ffd600',
        },

        2: {
          color: '#00c853',
        }
      }
    };
  
    chart = new google.visualization.AreaChart( document.getElementById('chart') );
  
    chart.draw( data, options );
  }
  
  window.onresize = () => {
    chart.draw( data, options );
  };
};
