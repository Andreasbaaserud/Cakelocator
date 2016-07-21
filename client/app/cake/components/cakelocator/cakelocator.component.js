import template from './cakelocator.html';
import './cakelocator.styl';

class CakelocatorController {
  constructor(CakelocatorService, $state) {
    this.name = 'cakelocator';
    this.$state = $state;
    this.CakelocatorService = CakelocatorService;

    // cakelocator-table
    this.cakeList = [];

    // cakelocator-add
    this.newCake = {
      "typeInput": "",
      "locationInput": "",
      "sizeInput": ""
    };

    CakelocatorService.getCakeList().then((response) => {
      this.cakeList = response;
    });
  }

  saveCake () {
    this.CakelocatorService.saveCake(this.newCake.typeInput, this.newCake.locationInput, this.newCake.sizeInput);

    this.CakelocatorService.getCakeList().then((response) => {
      this.cakeList = response;
    });

    this.$state.go($state.current, {}, {reload: true}); //second parameter is for $stateParams
    this.$state.reload(); // should be changed
    //this.$scope.reload();
  }

}

CakelocatorController.$inject = ["CakelocatorService", "$state"];

let cakelocatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: CakelocatorController,
  controllerAs: "vm"
};

export default cakelocatorComponent;
