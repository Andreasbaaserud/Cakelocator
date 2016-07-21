import angular from 'angular';
import cakelocatorTableComponent from './cakelocator-table.component';

let cakelocatorTableModule = angular.module('app.cakelocator-table', [])

.component('cakelocatorTable', cakelocatorTableComponent);

export default cakelocatorTableModule;
