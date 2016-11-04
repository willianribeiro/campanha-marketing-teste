(function() {
  'use strict'

  angular
    .module( 'app.modules.users' )
    .factory( 'UsersModel', usersModel );

    function usersModel() {
      return {
        data: []
      }
    }

})();
