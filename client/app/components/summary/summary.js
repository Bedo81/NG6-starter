import angular from 'angular';
import uiRouter from 'angular-ui-router';
import summaryComponent from './summary.component';

let summaryModule = angular.module('summary', [
  uiRouter
])

.component('summary', summaryComponent);

export default summaryModule;
