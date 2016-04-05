angular.module('Randomizer', [])
  .controller('OptionsController', function($scope, Selector){
    angular.extend($scope, Selector);
        //default options;
    $scope.options = ['Fly a kite', 'Pancake art', 'Go to the roller rink', 'Make a homemade pizza', 'Make a marshmallow catapult', 'Tennis at the local park', 'Drive in movie!']; 
  })
  .controller('ActivityController', function($scope, Generator){
    angular.extend($scope, Generator);
    $scope.display = 'Time for fun!';
  })
  .factory('Generator', function () {
    
    var generateIdea = function(){
      var index = Math.floor(Math.random() * this.options.length)
      console.log(this.options[index]);
      this.display = this.options[index].description;
    }
    
    return {
      generateIdea: generateIdea,
    }    
  })
  .factory('Selector', function($http){
      //send get request for activity options
    var getOptions = function () {
      var self = this;
      console.log(self)
      console.log('getOptions called')
      return $http({
        method: 'GET',
        url: '/activities'
      })
      .then(function(response){
        console.log(response.data)
        return response.data;
      })
      .then(function(response){
        self.options = response;
      })
    }
    
    return {
      getOptions: getOptions
    }
  });
