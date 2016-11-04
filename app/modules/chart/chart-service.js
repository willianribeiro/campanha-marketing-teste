(function() {
  'use strict'

  angular
    .module( 'app.modules.chart' )
    .factory( 'ChartService', chartService );

  function chartService( ChartModel ) {

    var interactionDictionary = {};

    return {
      getChartData: function() {
        return [

        ];
      },

      getChartOptions: function() {
        return {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Interações dos usuários'
          },
          xAxis: {
            title: {
              text: 'Usuários'
            },
          },
          yAxis: {
            title: {
              text: 'Interações'
            }
          },
          series: this.getChartData()
        };
      }
    };
  }

})();

// {
//     "brand": 2,
//     "user": 18,
//     "type": "SHARE",
//     "text": "Lorem ipsum dolor sit amet."
// }
