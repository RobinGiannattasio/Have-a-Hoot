angular.module('Randomizer', [])
  .controller('ActivityController', function($scope, Generator){
    angular.extend($scope, Generator)
    $scope.display = 'Time for fun!';
  })
  .factory('Generator', function(){
    var options = ['Fly a kite', 'Pancake art', 'Go to the roller rink', 'Make a homemade pizza', 'Make a marshmallow catapult', 'Tennis at the local park', 'Drive in movie!'];
    
    var generateIdea = function(){
      var index = Math.floor(Math.random() * options.length)
      this.display = options[index];
      console.log('idea updated')
    }
    
    return {
      generateIdea: generateIdea
    }
    
  });