angular.module('notebook.directives', ['NoteService'])

.directive('noteList', function(){

  //returns an object that defines the directive (how it looks and acts)
  return {

    //how should I look?
    template: '<div>Times Clicked: {{numberClicked}}</div><my-note index="$index" note="::singleNote" ng-repeat="singleNote in notes"></my-note>',

    //isolated scope so that I create my own universe
    //what configuration parameters do I need to be passed in?
    scope:{},

    //how should I intract with other services/directives?
    controller: function($scope, NoteFactory) {

      //=============================
      //initalize our state
      $scope.numberClicked = 0;

      //access an external data source (NoteFactory)
      $scope.notes = NoteFactory.getNotes(1000);


      //=============================
      //react to events that other directives/services emit
      //teamwork!
      $scope.$on('note:clicked', function(){

        //update our own state
        $scope.numberClicked++;

        //this is needed because this event happens out of the regular digest cycle
        //so without this, the state will update, but the UI will not
        $scope.$apply();

        //just verify that the event was actually heard by this directive
        console.log('noteList heard clicked');
      });
    },
  };

});
