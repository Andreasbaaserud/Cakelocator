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
    cakeList: "=",
    newCake: "="
  },
  template,
  controller: CakelocatorTableController,
  controllerAs: "vm"
};

export default cakelocatorTableComponent;
