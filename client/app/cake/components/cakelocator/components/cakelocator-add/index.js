import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cakelocatorAddComponent from './cakelocator-add.component';

let cakelocatorAddModule = angular.module('cakelocatorAdd', [
  uiRouter
])

.component('cakelocatorAdd', cakelocatorAddComponent);

export default cakelocatorAddModule;
