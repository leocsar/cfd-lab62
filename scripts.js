window.onload = () => {
  let data, options, chart, table;

  google.charts.load( 'current', { 'packages': ['corechart'] } );
  google.charts.setOnLoadCallback( drawChart );

  setInterval(() => {
    drawChart();
   }, 60000);

  options = {
    title: 'CFD - Lab62',

    hAxis: {
      titleTextStyle: {
        color: '#333'
      },
      slantedText: true,
      slantedTextAngle: 45
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

  function drawChart() {
    data = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1j5Yl5-lk8oJcucet0jnVO7lm-86KRgxe29ds2-hJnHc/gviz/tq?range=A1:D');

    data.send( processaDados );

    function processaDados( resultado ) {
      table = resultado.getDataTable();

      table = google.visualization.arrayToDataTable( processaCsv(google.visualization.dataTableToCsv( table )) );

      chart = new google.visualization.AreaChart( document.getElementById('chart') );
      chart.draw( table, options );
    };

    
  };

    function processaCsv( csv ) {
      csv = csv.split('\n');
      csv = csv.map(item => {
        return item.split(',');
      });

      csv = csv.filter(item => item[1] !== '' );
      csv = csv.filter(item => item[0] !== '' );
      csv = csv.map(item => [ item[0], parseInt(item[1]), parseInt(item[2]), parseInt(item[3])])
      csv = [['Dia', 'A fazer', 'Fazendo', 'Feito'], ...csv]

      return csv;
    }

};
