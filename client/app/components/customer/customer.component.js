import template from './customer.html';
import controller from './customer.controller';
import './customer.styl';

let customerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default customerComponent;
