import template from './cakelocator-add.html';
import './cakelocator-add.styl';

class CakelocatorAddController {
  constructor() {
    this.name = 'cakelocator-add';
  }
}

CakelocatorAddController.$inject = [];

let cakelocatorAddComponent = {
  restrict: 'E',
  bindings: {
    newCake: "=", // two-way binding
    saveCake: "&" // method binding
  },
  template,
  controller: CakelocatorAddController,
  controllerAs: "vm"
};

export default cakelocatorAddComponent;
