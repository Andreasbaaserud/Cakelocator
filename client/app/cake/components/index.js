import angular from 'angular';
import cakelocatorModule from './cakelocator';

let componentsModule = angular.module('app.cake.components', [
    cakelocatorModule.name
]);

export default componentsModule;