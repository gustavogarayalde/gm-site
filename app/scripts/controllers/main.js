'use strict';

/**
 * @ngdoc function
 * @name gmSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gmSiteApp
 */
angular.module('gmSiteApp')
  .controller('MainCtrl', function ($scope, $timeout, $translate) {

    $scope.$watch('visibleSection', function (section) {
    });

    function getNavHeight() {
      return $(window).width() < 1060 ? 100 : 65;
    }

    // Algunas variables globales
    var scrollTop = null;
    var scrollBottom = null;

    var sectionsPositions = {};

    function getAllPositions() {
      scrollTop = $(window).scrollTop() + getNavHeight(); // Parte mas alta de la pantalla visualmente activa
      scrollBottom = $(window).height() + scrollTop; // Parte mas baja de la pantalla (visualmente activa)
      sectionsPositions.inicio = $('#section-inicio').position().top;
      sectionsPositions.nosotros = $('#section-nosotros').position().top;
      sectionsPositions.servicios = $('#section-servicios').position().top;
      sectionsPositions.productos = $('#section-productos').position().top;
      sectionsPositions.contacto = $('#section-contacto').position().top;
    }

    var alreadyAnimated = {
      nosotros: false,
      servicios: false,
      productos: false
    };

    const coverTextEnglish = 'We are an interdisciplinary team of people where efficiency, creativity and research ' +
      'are part of our essence.';
    const coverTextSpanish = 'Somos un equipo interdisciplinario de personas donde la eficiencia, la creatividad ' +
      'y la investigación son parte de nuestra esencia.';

    var animatedCoverTextEnglish = new Typewriter(document.getElementById('animated-cover-text-english'), {
      typingSpeed: 35
    });
    var animatedCoverTextSpanish = new Typewriter(document.getElementById('animated-cover-text-spanish'), {
      typingSpeed: 35
    });

    function handleAnimations() {
      // Animacion Nosotros

      if (scrollBottom > sectionsPositions.nosotros + 250) {
        if (!alreadyAnimated.nosotros) {
          alreadyAnimated.nosotros = true;
          // English
          animatedCoverTextEnglish
            .pauseFor(500)
            .typeString(coverTextEnglish)
            .start();
          // Spanish
          animatedCoverTextSpanish
            .pauseFor(500)
            .typeString(coverTextSpanish)
            .start();
        }
      }

      // Animacion Servicios
      if (scrollBottom > sectionsPositions.servicios + 400) {
        if (!alreadyAnimated.servicios) {
          alreadyAnimated.servicios = true;
          var servicesBoxes = $('.servicios-boxes .box');
          var timeout = 0;
          angular.forEach(servicesBoxes, function (box) {
            $timeout(function () {
              $(box).addClass('active');
            }, timeout);
            timeout += 150;
          })
        }
      }

      // Animacion Productos
      if (scrollBottom > sectionsPositions.productos + 400) {
        if (!alreadyAnimated.productos) {
          alreadyAnimated.productos = true;
          var productsBoxes = $('.productos-boxes .producto-box');
          var timeout = 0;
          angular.forEach(productsBoxes, function (box) {
            $timeout(function () {
              $(box).addClass('active');
            }, timeout);
            timeout += 200;
          })
        }
      }
    }

    $(window).on('scroll', function () {
      getAllPositions();
      $timeout( function () { $scope.visibleSection = getVisibleSection() } );
      handleAnimations()
    });
    $(document).on('ready', function () {
      getAllPositions();
      $timeout( function () { $scope.visibleSection = getVisibleSection() } );
      handleAnimations()
    });

    function getVisibleSection() {
      const diferencia = 350;
      if(scrollBottom - diferencia > sectionsPositions.contacto) return 'contacto';
      else if (scrollBottom - diferencia > sectionsPositions.productos) return 'productos';
      else if (scrollBottom - diferencia > sectionsPositions.servicios) return 'servicios';
      else if (scrollBottom - diferencia > sectionsPositions.nosotros) return 'nosotros';
      else return 'inicio';
    }

    $scope.goToSection = function(sectionName) {
      $('html, body').animate({
        scrollTop: sectionsPositions[sectionName] - 65
      }, 1000);
    };

    function init() {
      $scope.visibleSection = getVisibleSection();
    }
    init();

    $scope.sendContactMail = function () {
      const subject = $scope.contactForm.subject;
      const body = $scope.contactForm.body;
      document.location.href = "mailto:info@globalmeaning.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);
    };

    $scope.language = 'es';
    $scope.toggleLanguage = function () {
      $timeout(function () {
        $scope.language = $scope.language === 'en' ? 'es' : 'en';
      });
      if($scope.language === 'en') {
        $translate.use('es');
      } else {
        $translate.use('en');
      }
    };


  });
