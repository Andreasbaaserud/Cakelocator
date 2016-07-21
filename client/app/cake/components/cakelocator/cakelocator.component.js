import template from './cakelocator.html';
import './cakelocator.styl';

class CakelocatorController {
  constructor(CakelocatorService, $scope) {
    this.name = 'cakelocator';
    this.CakelocatorService = CakelocatorService;

    // cakelocator-table
    this.cakeList = [];

    // cakelocator-add
    this.newCake = {
      "typeInput": "",
      "locationInput": "",
      "sizeInput": ""
    };
    
    $scope.$watch(this.CakelocatorService.getCakeList(), () => {
      console.log("new cake found");
      CakelocatorService.getCakeList().then((response) => {
        this.cakeList = response;
      });
    });
  }

  saveCake () {
    this.CakelocatorService.saveCake(this.newCake.typeInput, this.newCake.locationInput, this.newCake.sizeInput);
  }

}

CakelocatorController.$inject = ["CakelocatorService", "$scope"];

let cakelocatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: CakelocatorController,
  controllerAs: "vm"
};

export default cakelocatorComponent;
