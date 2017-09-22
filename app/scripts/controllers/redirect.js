'use strict';

/**
 * @ngdoc function
 * @name gmSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gmSiteApp
 */
angular.module('gmSiteApp')
  .controller('RedirectCtrl', function ($timeout) {
    $timeout(function () {
      window.location.replace("www.globalmeaning.com.ar");
    }, 1500)
  });
