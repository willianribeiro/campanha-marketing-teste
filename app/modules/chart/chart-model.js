(function() {
  'use strict'

  angular
    .module( 'app.modules.chart' )
    .factory( 'ChartModel', chartModel );

    function chartModel() {
      return {
        data: [],
        series: []
      };
    }

})();
