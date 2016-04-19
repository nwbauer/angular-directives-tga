angular.module('notebook.directives')

.directive('myNote', function(){

  return {
    template: '<div>Note {{::index}} {{::note.message}}</div>',
    scope:{
      note:'=',
      index:'=',
    },
    link: function(scope, elem, attrs) {

      elem.on('click', function(event){

        if(scope.index === 1) {
          elem.css({color: 'rgb(225,0,0)'});
        }

        scope.$emit('note:clicked');
      });
    },
  };

});