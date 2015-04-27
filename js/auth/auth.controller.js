angular
  .module('tas')
  .controller('AuthController', AuthController);

function AuthController($rootScope, $scope, $location, authFactory, BASE_URL) {
  var vm = this;

  vm.login = function () {
    authFactory.login(vm.email, vm.password, function (err, authData) {
      if (err) {
        console.log('Error logging in user', err);
      } else {
        console.log('Logged in successfully', authData);
        $location.path('/tas');
        $scope.$apply();
      }
    });
  };

  vm.register = function () {
    authFactory.register(vm.email, vm.password, function (err, authData) {
      if (err && err.code === 'EMAIL_TAKEN') {
        console.log('Error creating user:', err);
        vm.login();
      } else if (err) {
        console.log('Error creating user:', err);
      } else {
        console.log('User created successfully', authData);
        vm.login();
      }
    });
  };

  vm.forgotPassword = function () {
    authFactory.resetPassword(vm.user, function (err) {
      if (err) {
        console.log('Error resetting password:', err);
      } else {
        console.log('Password reset email sent successfully');
      }
    });
  };
}