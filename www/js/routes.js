angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tecElectroElectrNica.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('tecElectroElectrNica', {
    url: '/side-menu21',
    templateUrl: 'templates/tecElectroElectrNica.html',
    controller: 'tecElectroElectrNicaCtrl'
  })

  .state('tecElectroElectrNica.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.matemTica', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matemTica.html',
        controller: 'matemTicaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.fSica', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSica.html',
        controller: 'fSicaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.matemTicaAplicada', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matemTicaAplicada.html',
        controller: 'matemTicaAplicadaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.instalacionesElCtricasI', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesElCtricasI.html',
        controller: 'instalacionesElCtricasICtrl'
      }
    }
  })

  .state('tecElectroElectrNica.iluminaciN', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iluminaciN.html',
        controller: 'iluminaciNCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.tallerDeElectricidad', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeElectricidad.html',
        controller: 'tallerDeElectricidadCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.ingles', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingles.html',
        controller: 'inglesCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.informTicaAplicada', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTicaAplicada.html',
        controller: 'informTicaAplicadaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.expresiNOralYEscrita', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.instalacionesElCtricasII', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesElCtricasII.html',
        controller: 'instalacionesElCtricasIICtrl'
      }
    }
  })

  .state('tecElectroElectrNica.seguridadYProtecciNIndustrial', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seguridadYProtecciNIndustrial.html',
        controller: 'seguridadYProtecciNIndustrialCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.electrNicaI', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNicaI.html',
        controller: 'electrNicaICtrl'
      }
    }
  })

  .state('tecElectroElectrNica.representaciNTCnica', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/representaciNTCnica.html',
        controller: 'representaciNTCnicaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.tallerDeElectrNicaAplicada', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeElectrNicaAplicada.html',
        controller: 'tallerDeElectrNicaAplicadaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.electrNicaII', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNicaII.html',
        controller: 'electrNicaIICtrl'
      }
    }
  })

  .state('tecElectroElectrNica.instalacionesElCtricasIII', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesElCtricasIII.html',
        controller: 'instalacionesElCtricasIIICtrl'
      }
    }
  })

  .state('tecElectroElectrNica.tallerDeDocumentaciNElCtrica', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDocumentaciNElCtrica.html',
        controller: 'tallerDeDocumentaciNElCtricaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.sensoresYAutomatismo', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sensoresYAutomatismo.html',
        controller: 'sensoresYAutomatismoCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.neumTicaEHidrUlica', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/neumTicaEHidrUlica.html',
        controller: 'neumTicaEHidrUlicaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.tallerDeEmpresaTecnolGica', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeEmpresaTecnolGica.html',
        controller: 'tallerDeEmpresaTecnolGicaCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.instalacionesDeCorrientesDBiles', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesDeCorrientesDBiles.html',
        controller: 'instalacionesDeCorrientesDBilesCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.electrNicaIII', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNicaIII.html',
        controller: 'electrNicaIIICtrl'
      }
    }
  })

  .state('tecElectroElectrNica.sistemasDigitales', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasDigitales.html',
        controller: 'sistemasDigitalesCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.trabajoFinal', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('tecElectroElectrNica.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});