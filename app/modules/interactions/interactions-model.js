(function() {
  'use strict'

  angular
    .module( 'app.modules.interactions' )
    .factory( 'InteractionsModel', interactionsModel );

    function interactionsModel() {
      return {
        data: {}
      }
    }

})();
