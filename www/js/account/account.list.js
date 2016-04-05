/**
 * Created by bin on 2016/4/5.
 */
(function () {
  'use strict';

  angular
    .module('account.list', [])
    .controller('AccountListCtrl', AccountListCtrl);

  AccountListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function AccountListCtrl($scope) {
    $scope.init = init;


    init();

    // A confirm dialog
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: '确认',
        template: 'Are you sure you want to eat this ice cream?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };


    function init() {
    }

  }
})();
