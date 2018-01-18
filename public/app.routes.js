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






});