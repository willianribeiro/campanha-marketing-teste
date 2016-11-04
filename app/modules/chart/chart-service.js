(function() {
  'use strict'

  angular
    .module( 'app.modules.chart' )
    .factory( 'ChartService', chartService );

  function chartService( $http, $q, ChartModel,
                         BrandsService, BrandsModel,
                         InteractionsService, InteractionsModel,
                         UsersService, UsersModel ) {

    init();

    function init() {
      loadData().then( prepareData );
    };

    function loadData() {
      let promises = {
        brands: BrandsService.load(),
        interactions: InteractionsService.load(),
        users: UsersService.load(),
      }

      return $q.all( promises ).then( function( result ) {
        BrandsModel.data = result.brands.data;
        InteractionsModel.data = result.interactions.data;
        UsersModel.data = result.users.data;
      });
    }

    function prepareData( data ) {
      var transformedData = [];
      UsersModel.data.forEach( function( user ) {
        var entry = {};
        entry.name = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
        entry.interactions = InteractionsModel.data.filter( function( interaction ) {
          return interaction.user === user.id;
        });
        entry.totalInteractions = entry.interactions.length;
        transformedData.push( entry );
      });
      ChartModel.data = transformedData;

      extractSeries();
    }

    function extractSeries() {
      var series = [];

      ChartModel.data.forEach( function(user) {
        var entry = {};
        entry.name = user.name;
        entry.data = [user.totalInteractions];
        series.push(entry);
      });

      series = _.sortBy(series, function(entry) { return -entry.data; })
      ChartModel.series = series;
    }

    return {
      filterByBrand: function(brand) {
        ChartModel.data.forEach( function ( user ) {
          if ( brand !== 'all' ) {
            var quantity = user.interactions.filter( function ( interaction ) {
              return interaction.brand === brand;
            });
            user.totalInteractions = quantity.length;
          } else {
            user.totalInteractions = user.interactions.length;
          }
        });

        extractSeries();
      },

      getChartOptions: function() {
          var values = ChartModel.series;
          return {
            options: {
              chart: {
                type: 'column'
              }
            },
            title: {
              text: 'Interações dos usuários com as marcas'
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
            size: {
              width: 900,
              height: 700
            }
          };
      }


    };
  }

})();
