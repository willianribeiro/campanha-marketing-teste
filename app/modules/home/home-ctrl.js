(function() {
  'use strict'

  angular
    .module( 'app.modules.home' )
    .controller( 'HomeCtrl', homeCtrl );

  function homeCtrl( ChartService ) {
    var vm = this;
    init( vm );

    function init( vm ) {
      vm.chartOptions = ChartService.getChartOptions();
    }

  }

})();
