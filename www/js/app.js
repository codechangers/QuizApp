// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MyCtrl', function($scope, $ionicPopup) {

   $scope.showAlert1 = function() {

      var alertPopup = $ionicPopup.alert({
         title: 'Hint',
         template: 'Remember that almost every tag has a closing tag. &lt;/...&gt;'
      });
   };
   $scope.showAlert2 = function() {

      var alertPopup = $ionicPopup.alert({
         title: 'Hint',
         template: 'Remember, you are setting the "background color..."'
      });
   };
   $scope.showAlert3 = function() {

      var alertPopup = $ionicPopup.alert({
         title: 'Hint',
         template: 'Remember the key word to create a "VAR"iable...'
      });
   };

})
