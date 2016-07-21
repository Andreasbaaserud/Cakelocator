import template from './cakelocator-table.html';
import './cakelocator-table.styl';


class CakelocatorTableController {
  constructor() {
    this.name = 'cakelocatorTable';
    console.log(this.cakeList);
  }
}

CakelocatorTableController.$inject = [];

let cakelocatorTableComponent = {
  restrict: 'E',
  bindings: {
    cakeList: "=", // two-way binding 
    newCake: "=" // two-way binding
  },
  template,
  controller: CakelocatorTableController,
  controllerAs: "vm"
};

export default cakelocatorTableComponent;
