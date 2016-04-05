var Activity = require('./activityModel.js');
    Q = require('q');
    
var findAllAsync = Q.nbind(Activity.find, Activity),
    createLinkAsync = Q.nbind(Activity.create, Activity)
    removeAsync = Q.nbind(Activity.remove, Activity);

module.exports = {
  allOptions: function (req, res, next){
    // removeAsync({})
    // createLinkAsync(activities);
    findAllAsync({})
      .then(function (options) {
        console.log('-------', options)
        res.json(options);
      })
      .fail(function (error) {
        next(error);
      });
  },
  allRainy: function (req, res, next){
    findAllAsync({rainy: true})
      .then(function (options) {
        console.log('*******', options)
        res.json(options);
      })
      .fail(function (error){
        next(error);
      });
  }
}