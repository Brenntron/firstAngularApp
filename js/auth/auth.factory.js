angular
  .module('tas')
  .factory('authFactory', authFactory);

function authFactory($location, BASE_URL) {
  return {
    isLoggedIn: function () {
      var fb = new Firebase(BASE_URL);

      return fb.getAuth();
    },
    logout: function (cb) {
      var fb = new Firebase(BASE_URL);

      fb.unauth(cb);
    },
    login: function (email, password, cb) {
      var fb = new Firebase(BASE_URL);

    fb.authWithPassword({
      email:    email,
      password: password
    }, cb);
    },
    register: function (user, cb) {
      var fb = new Firebase(BASE_URL);

    fb.createUser(user, cb);
    },
    resetPassword: function (user, cb) {
      var fb = new Firebase(BASE_URL);

      fb.resetPassword(user, cb);
    }
  };
}