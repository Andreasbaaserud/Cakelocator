import angular from 'angular';
import CakelocatorService from './cakelocator.service';

let serviceModule = angular.module('app.cake.services.cakelocator', [])
                        .service('CakelocatorService', CakelocatorService);

export default serviceModule;