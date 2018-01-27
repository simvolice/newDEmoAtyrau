/**
 * Created by Admin on 29.09.2016.
 */



app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider


      .state('index', {
        url: '/',
        view: {

          templateUrl: 'index.html'

        }

      })

      .state('login', {
        url: '/login',
        templateUrl: 'components/login/loginView.html',


      })


      .state('main', {
          url: '/main',
          templateUrl: 'components/main/mainView.html',


      })

      .state('budget', {
          url: '/budget',
          templateUrl: 'components/budget/budgetView.html',


      })


      .state('structureDohod', {
          url: '/structureDohod',
          templateUrl: 'components/structureDohod/structureDohodView.html',


      })


      .state('dohodplan', {
          url: '/dohodplan',
          templateUrl: 'components/dohodPlan/dohodPlanView.html',


      })


      .state('rashodplan', {
          url: '/rashodplan',
          templateUrl: 'components/rashodplan/rashodplanView.html',


      })


      .state('structureRashod', {
          url: '/structurerashod',
          templateUrl: 'components/structureRashod/structureRashodView.html',


      })

      .state('cubeInProgramm', {
          url: '/cubeinprogramm',
          templateUrl: 'components/cubeInProgramm/cubeInProgrammView.html',


      })

      .state('cubeInAdmin', {
          url: '/cubeinadmin',
          templateUrl: 'components/cubeInAdmin/cubeInAdminView.html',


      })

      .state('cleanBudget', {
          url: '/cleanbudget',
          templateUrl: 'components/cleanBudget/cleanBudgetView.html',


      })


      .state('cubeInSphete', {
          url: '/cubeinsphete',
          templateUrl: 'components/cubeInSphere/cubeInSpheteView.html',


      })


      .state('cubeInTown', {
          url: '/cubeintown',
          templateUrl: 'components/cubeInTown/cubeInTownView.html',


      })


      .state('saldo', {
          url: '/saldo',
          templateUrl: 'components/saldo/saldoView.html',


      })

      .state('financeDeficit', {
          url: '/financedeficit',
          templateUrl: 'components/financeDeficit/financeDeficitView.html',


      })


      .state('budgetispol', {
          url: '/budgetispol',
          templateUrl: 'components/ispolnenie/budget/budgetView.html',


      })

      .state('ispoldohodplan', {
          url: '/ispoldohodplan',
          templateUrl: 'components/ispolnenie/dohodPlan/dohodPlanView.html',


      })

      .state('ispolrashodplanctrl', {
          url: '/ispolrashodplanctrl',
          templateUrl: 'components/ispolnenie/rashodplan/rashodplanView.html',


      })



      .state('ispolcubeinprogrammctrl', {
          url: '/ispolcubeinprogrammctrl',
          templateUrl: 'components/ispolnenie/cubeInProgramm/cubeInProgrammView.html',


      })


      .state('ispolcubeinadminctrl', {
          url: '/ispolcubeinadminctrl',
          templateUrl: 'components/ispolnenie/cubeInAdmin/cubeInAdminView.html',


      })

      .state('ispolcubeinspherectrl', {
          url: '/ispolcubeinspherectrl',
          templateUrl: 'components/ispolnenie/cubeInSphere/cubeInSpheteView.html',


      })


      .state('ispolcubeintownctrl', {
          url: '/ispolcubeintownctrl',
          templateUrl: 'components/ispolnenie/cubeInTown/cubeInTownView.html',


      })
      .state('socvrpctrl', {
          url: '/socvrpctrl',
          templateUrl: 'components/socVRP/socVRPView.html',


      })

      .state('socpromctrl', {
          url: '/socpromctrl',
          templateUrl: 'components/socProm/socPromView.html',


      })

      .state('socinvestctrl', {
          url: '/socinvestctrl',
          templateUrl: 'components/socInvest/socInvestView.html',


      })

      .state('homepage2ctrl', {
          url: '/homepage2ctrl',
          templateUrl: 'components/main2/main2View.html',


      })







});