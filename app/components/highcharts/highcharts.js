(function() {
  angular
    .module( 'app.components.highcharts', [] )
    .directive( 'highcharts', highcharts );

    function highcharts() {
      return {
          restrict: 'E',
          template: '<div></div>',
          scope: {
              options: '='
          },
          link: function ( scope, element ) {
              Highcharts.chart( element[0], scope.options );
          }
      };
    }

})();
