(function() {
  'use strict'

  angular
    .module( 'app.modules.interactions' )
    .factory( 'InteractionsService', interactionsService );

    function interactionsService( $http, InteractionsModel ) {
      var interactionsURL = 'data/interactions.json';

      return {
        load: function() {
          return $http.get( interactionsURL );
        }
      }
    }

})();
