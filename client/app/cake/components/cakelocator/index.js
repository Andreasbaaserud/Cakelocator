import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cakelocatorComponent from './cakelocator.component';
import cakelocatorAddComponent from './components/cakelocator-add';
import cakelocatorTableComponent from './components/cakelocator-table';

let cakelocatorModule = angular.module('app.cake.components.cakelocator', [
  uiRouter,
  cakelocatorAddComponent.name,
  cakelocatorTableComponent.name
])
.config(($stateProvider) => {
    "ngInject";
    $stateProvider
        .state('cakelocatorFrontpage', {
            url: '/',
            template: '<layout><cakelocator></cakelocator></layout>'
        });
})

.component('cakelocator', cakelocatorComponent);

export default cakelocatorModule;
