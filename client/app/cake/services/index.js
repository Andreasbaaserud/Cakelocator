import CakelocatorService from './cakelocator';

let serviceModule = angular.module("app.cake.services", [
    CakelocatorService.name
]);

export default serviceModule;