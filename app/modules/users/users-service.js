(function() {
  'use strict'

  angular
    .module( 'app.modules.users' )
    .factory( 'UsersService', usersService );

    function usersService( $http, UsersModel ) {
      var usersURL = 'data/users.json';

      return {
        load: function() {
          return $http.get( usersURL );
        }
      }
    }

})();
