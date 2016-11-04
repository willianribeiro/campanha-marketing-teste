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
      vm.isChartVisible = false;
    }

    function loadChart() {
      vm.chartOptions.series = ChartModel.series;
      vm.isChartVisible = true;
    }

    function filterByBrand(brand) {
      ChartService.filterByBrand(brand);
      vm.chartOptions.series = ChartModel.series;
      vm.isChartVisible = true;
    }

  }

})();
