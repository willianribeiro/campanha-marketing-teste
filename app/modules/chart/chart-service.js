(function() {
  'use strict'

  angular
    .module( 'app.modules.chart' )
    .factory( 'ChartService', chartService );

  function chartService( $http, ChartModel,
                         BrandsService, BrandsModel,
                         InteractionsService, InteractionsModel,
                         UsersService, UsersModel ) {

    BrandsService.load();
    InteractionsService.load();
    UsersService.load();

    return {
      getChartData: function() {
        return [

        ];
      },

      chartOptions: {
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
          series: []
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
