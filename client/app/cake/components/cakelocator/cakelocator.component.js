import template from './cakelocator.html';
import './cakelocator.styl';

class CakelocatorController {
  constructor(CakelocatorService) {
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

    this.updateCakeList();

/*
    CakelocatorService.getLatestCake(this.cakeList.length).then((response) => {
      for (var i = 0; i < response.length; i++) {
        this.cakeList.push(response[i]);
      }
    });
    */
    
  }

  updateCakeList () {
    this.CakelocatorService.getCakeList().then((response) => {
      this.cakeList = angular.copy(response);
    });
  }

  saveCake () {
    this.CakelocatorService.saveCake(this.newCake.typeInput, this.newCake.locationInput, this.newCake.sizeInput).then((res) => {

    this.updateCakeList();

      /*
      this.CakelocatorService.getLatestCake(this.cakeList.length).then((response) => {
        for (var i = 0; i < response.length; i++) {
          this.cakeList.push(response[i]);
        }
      });*/
    });

    // empty strings
    this.newCake.typeInput = "";
    this.newCake.locationInput = "";
    this.newCake.sizeInput = "";
  }

}

CakelocatorController.$inject = ["CakelocatorService"];

let cakelocatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: CakelocatorController,
  controllerAs: "vm"
};

export default cakelocatorComponent;
