angular.module('Randomizer', [])
  .controller('OptionsController', function($scope, Selector){
    angular.extend($scope, Selector);
    $scope.options = $scope.getAll();
  })
  .controller('ActivityController', function($scope, Generator){
    angular.extend($scope, Generator);
    $scope.display = 'Time for fun!';
  })
  .factory('Generator', function () {
    
    var generateIdea = function(){
      if(this.options.length){
        var index = Math.floor(Math.random() * this.options.length)
        this.display = this.options[index].description;
        this.options.splice(index, 1);
      }else{
        this.display = "We've run out of things to do!"
      }
    }
    
    return {
      generateIdea: generateIdea,
    }    
  })
  .factory('Selector', function($http){
    //send get request for activity options
    var getAll = function () {
      var self = this;
      self.display = 'Options generated!';
      return $http({
        method: 'GET',
        url: '/activities'
      })
      .then(function(response){
        return response.data;
      })
      .then(function(response){
        self.options = response;
      });
    }
    
    var getRainy = function(){
      var self = this;
      self.display = 'Rainy day activities generated!';
      return $http({
        method: 'GET',
        url: '/rainy'
      }).
      then(function(response){
        return response.data;
      })
      .then(function(response){
        self.options = response;
      });
    }
    
    var getOutdoor = function(){
      var self = this;
      self.display = 'Outdoor activities generated!';
      return $http({
        method: 'GET',
        url: '/outdoor'
      }).
      then(function(response){
        return response.data;
      })
      .then(function(response){
        self.options = response;
      });
    }
    
    var getIndoor = function(){
      var self = this;
      self.display = 'Indoor activities generated!';
      return $http({
        method: 'GET',
        url: '/indoor'
      }).
      then(function(response){
        return response.data;
      })
      .then(function(response){
        self.options = response;
      });
    }
    
    return {
      getAll: getAll,
      getRainy: getRainy,
      getOutdoor: getOutdoor,
      getIndoor: getIndoor
    }
  });
