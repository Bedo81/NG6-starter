import template from './summary.html';
import controller from './summary.controller';
import './summary.styl';

let summaryComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default summaryComponent;
