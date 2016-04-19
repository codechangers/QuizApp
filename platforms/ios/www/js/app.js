(function(){
  var app = angular.module('starter', ['ionic']);

  var lang = [
    {
      slug: 'html',
      name:'HTML5',
      icon:"ion-social-html5",
      description:'Use HTML5 to build awesome webpages! Click here to get started.',
      difficulty_levels: [
        {
          name: 'easy',
          slug: 'easy',
          questions: [
            {
              id: '1',
              text: 'What is 2 + 2',
              answer: '4',
              hint: 'duh'
            },
            {
              id:'2',
              text: 'What is the biggest heading tag?',
              answer: '<h1>'
            }
          ]
        }
      ]
    },
    {
      slug:'css',
      name:'CSS',
      icon:"ion-social-css3",
      description:'Use CSS3 to make your website stand out! Click here to get started.'
    },
    {
      slug:'javascript',
      name:'JavaScript',
      icon:"ion-social-javascript",
      description:'Use JavaScript to add interaction to your website, and build games! Click here to get started.'
    }
  ];


  app.controller('LanguageListCtrl', function($scope){
    $scope.languages = lang;
  });

  app.controller('LanguageCtrl', function($scope, $state){
    console.log($state.params.language);
    for (var i = 0; i < lang.length; i++) {
      if (lang[i].slug==$state.params.language){
        $scope.lang=lang[i];
      }
    }
  });

  app.controller('QuestionCtrl', function($scope, $state, $ionicModal){
    console.log($state.params.language);
    for (var i = 0; i < lang.length; i++) {
      if (lang[i].slug==$state.params.language){
        $scope.lang = lang[i];
        for (var j = 0; j < lang[i].difficulty_levels.length; j++) {
          if (lang[i].difficulty_levels[j].slug==$state.params.difficulty){
            $scope.difficulty = lang[i].difficulty_levels[j];
            for (var k = 0; k < lang[i].difficulty_levels[j].questions.length; k++) {
              if (lang[i].difficulty_levels[j].questions[k].id==$state.params.question) {
                $scope.question = lang[i].difficulty_levels[j].questions[k];
              }
            }
          }
        }
      }
    }
    $scope.answer = {};
    $scope.check_question = function(form) {
      var templateUrl;
      if ($scope.answer.text==$scope.question.answer) {
        templateUrl = 'templates/correct.html';
      }
      else {
        templateUrl = 'templates/incorrect.html';
      }
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        modal.show();
      });
    };
  });

  app.config(function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    });

    $stateProvider.state('language_menu', {
      url: '/languages',
      templateUrl: 'templates/language_menu.html'
    });



    $stateProvider.state('difficulty_menu', {
      url: '/:language',
      templateUrl: 'templates/difficulty_menu.html'
    });

    $urlRouterProvider.when(
      $urlMatcherFactoryProvider.compile("/:language/questions/:difficulty/next-question"),
      function($match, $state) {
        $state.go('question',{
          language: $match.language,
          difficulty: $match.difficulty,
          question: '1'
        });
      }
    );


    $stateProvider.state('question', {
      url: '/:language/questions/:difficulty/:question',
      templateUrl: 'templates/question.html'
    });




    $stateProvider.state('score', {
      url: '/score',
      templateUrl: 'templates/score.html'
    });

    $urlRouterProvider.otherwise('/login');

  });


  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
}());
