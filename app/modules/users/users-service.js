(function() {
  'use strict'

  angular
    .module( 'app.modules.users' )
    .factory( 'UsersService', usersService );

    function usersService(UsersModel) {
      var usersURL = 'data/users.json';

      return {
        load: function() {
          UsersModel.data = $http.get( usersURL );
        }
      }
    }

})();







// function getUser(id_user){
//   var deferred = $q.defer();
//
//   var usersJson = userFactory.list().success(function(data){
//     var modelUser = data.filter(function(obj){
//       return obj.id == id_user
//     });
//     deferred.resolve(modelUser[0]);
//   });
//
//   return deferred.promise;
// }
