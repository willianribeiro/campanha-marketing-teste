(function() {
  'use strict'

  angular
    .module( 'app.modules.home' )
    .controller( 'HomeCtrl', homeCtrl );

  function homeCtrl( ChartService, ChartModel ) {
    var vm = this;
    init( vm );

    function init( vm ) {
      vm.chartOptions = ChartService.getChartOptions();
      vm.loadChart = loadChart;
      vm.filterByBrand = filterByBrand;
    }

    function loadChart() {
      vm.chartOptions.series = ChartModel.series;
    }

    function filterByBrand(brand) {
      ChartService.filterByBrand(brand);
      vm.chartOptions.series = ChartModel.series;
    }

  }

})();
