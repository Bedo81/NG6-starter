import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerComponent from './customer.component';

let customerModule = angular.module('customer', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('customer', {
      url: '/customer',
      template: '<customer></customer>'
    });
})

.component('customer', customerComponent);

export default customerModule;
