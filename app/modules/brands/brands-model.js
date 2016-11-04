(function() {
  'use strict'

  angular
    .module( 'app.modules.brands' )
    .factory( 'BrandsModel', brandsModel );

    function brandsModel() {
      return {
        data: {}
      }
    }

})();
