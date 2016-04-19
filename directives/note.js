angular.module('notebook.directives')

.directive('myNote', function(){

  //returns an object that defines the directive (how it looks and acts)
  return {

    //how should I look?
    template: '<div>Note {{::index}} {{::note.message}}</div>',

    //isolated scope so that I create my own universe
    //what configuration parameters do I need to be passed in?
    scope:{
      note:'=',
      index:'=',
    },

    //how should I update my UI based on my state ($scope values)?
    link: function(scope, elem, attrs) {

      //register a behavior
      elem.on('click', function(event){

        //based on my state, update the interface
        if(scope.index === 1) {
          elem.css({color: 'rgb(225,0,0)'});
        }

        //tell the parent controllers that I was clicked
        //teamwork!
        scope.$emit('note:clicked');
      });
    },
  };

});