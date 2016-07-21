import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'normalize.css';
//import Common from './common/common';
//import Components from './components/components';
import AppComponent from './app.component';

// modules
import CakeModule from './cake';

angular.module('app', [
    uiRouter,
    CakeModule.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);