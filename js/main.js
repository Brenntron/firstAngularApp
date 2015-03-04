angular
  .module('tas', [])
  .controller('TasController', function ($scope) {
    var vm = this;

    // vm.cohortOptions = {
    //   0: 'N/A',
    //   1: 'One',
    //   2: 'Two',
    //   3: 'Three',
    //   4: 'Four',
    //   5: 'Five',
    //   6: 'Six',
    //   7: 'Seven',
    //   8: 'Eight',
    //   9: 'Nine',
    //   10: 'Ten'
    // };

    vm.cohortOptions = [
      'N/A',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten'
    ];

    vm.data = [
      {
        nickName: 'TAdam',
        name: 'Adam',
        firstName: 'Adam',
        lastName: 'Kèésecker',
        current: true,
        cohort: 5
      },
      {
        nickName: 'ZAdam',
        name: 'Adam',
        firstName: 'Zöe',
        lastName: 'Ames',
        current: true,
        cohort: 6
      },
      {
        nickName: 'JuAdam',
        name: 'Adam',
        firstName: 'Juan',
        lastName: 'Rødrįguež',
        current: true,
        cohort: 6
      },
      {
        nickName: 'BrAdam',
        name: 'Adam',
        firstName: 'Brian',
        lastName: 'Hiått',
        current: false,
        cohort: 6
      },
      {
        nickName: 'BAdam',
        name: 'Adam',
        firstName: 'Adam',
        lastName: 'Barñhærd',
        current: false,
        cohort: 6
      }
    ];

    vm.addTA = function () {
      vm.newTA.name = 'Adam';
      vm.newTA.nickName = vm.newTA.firstName[0].toUpperCase() + 'Adam';

      vm.data.push(vm.newTA);
      _clearNewTA();
    };

    vm.removeTA = function (person) {
      var index = vm.data.indexOf(person);
      vm.data.splice(index, 1);
    };

    function _clearNewTA() {
      vm.newTA = {};
      $scope.newTA.$setPristine();
    }

  });
