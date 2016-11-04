(function() {
  'use strict'

  angular
    .module( 'app.modules.brands' )
    .factory( 'BrandsService', brandsService );

    function brandsService( $http, BrandsModel ) {
      var brandsURL = 'data/brands.json';

      return {
        load: function() {
          return $http.get( brandsURL );
        }
      }
    }

})();
