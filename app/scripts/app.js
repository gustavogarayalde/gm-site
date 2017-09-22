'use strict';

/**
 * @ngdoc overview
 * @name gmSiteApp
 * @description
 * # gmSiteApp
 *
 * Main module of the application.
 */
angular
  .module('gmSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .when('/redirect', {
      //   templateUrl: 'views/redirect.html',
      //   controller: 'RedirectCtrl',
      //   controllerAs: 'redirect'
      // })
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.translations('en', {
      NAV_HOME: 'Home',
      NAV_ABOUT_US: 'About Us',
      NAV_SERVICES: 'Services',
      NAV_PRODUCTS: 'Products',
      NAV_CONTACT: 'Contact',
      COVER_TEXT: 'At GLOBAL MEANING, we seek everyday to define new methodologies and guidelines for the construction of ' +
      'software with the goal of constantly improving the industry. We are not only dedicated to the development of ' +
      'products and new services, but also actively participate in open source developments for the entire IT ' +
      'community.',
      SERVICE_MOBILE_DEVELOPMENT: 'Mobile Development',
      SERVICE_WEB_DEVELOPMENT: 'Web Development',
      SERVICE_ARCHITECTURE_DESIGN: 'Architectures Design and Integrations',
      SERVICE_UX: 'UX/UI Design',
      FORM_SUBJECT: 'Subject',
      FORM_MESSAGE: 'Message'
    });
    $translateProvider.translations('es', {
      NAV_HOME: 'Inicio',
      NAV_ABOUT_US: 'Nosotros',
      NAV_SERVICES: 'Servicios',
      NAV_PRODUCTS: 'Productos',
      NAV_CONTACT: 'Contacto',
      COVER_TEXT: 'En GLOBAL MEANING buscamos cada día definir nuevas metodologías y pautas de construcción de ' +
      'software con el objetivo de la mejora constante de la industria. No solo nos dedicamos al desarrollo de ' +
      'productos y nuevos servicios sino que tambien participamos activamente en desarrollos open source para toda ' +
      'la comunidad de IT.',
      SERVICE_MOBILE_DEVELOPMENT: 'Desarrollo Mobile',
      SERVICE_WEB_DEVELOPMENT: 'Desarrollo Web',
      SERVICE_ARCHITECTURE_DESIGN: 'Diseño de Arquitecturas e Integraciones',
      SERVICE_UX: 'Diseño UX/UI',
      FORM_SUBJECT: 'Asunto del mensaje',
      FORM_MESSAGE: 'Mensaje'
    });

    $translateProvider.preferredLanguage('es');

  });
