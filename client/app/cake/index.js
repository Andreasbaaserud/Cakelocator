import angular from 'angular';
import componentsModule from './components';
import servicesModule from './services';

let cakeModule = angular.module('app.cake', [
    componentsModule.name,
    servicesModule.name
]);

export default cakeModule;