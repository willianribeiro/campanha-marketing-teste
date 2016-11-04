(function() {
  'use strict'

  angular
    .module( 'app.modules.interactions' )
    .factory( 'InteractionsService', interactionsService );

    function interactionsService( InteractionsModel ) {
      var interactionsURL = 'data/interactions.json';

      return {
        load: function() {
          InteractionsModel.data = $http.get( interactionsURL );;
        }
      }
    }

})();
