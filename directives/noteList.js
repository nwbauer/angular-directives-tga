angular.module('notebook.directives', ['NoteService'])

.directive('noteList', function(){

  return {
    template: '<div>Times Clicked: {{numberClicked}}</div><my-note index="$index" note="::singleNote" ng-repeat="singleNote in notes"></my-note>',
    scope:{
      version:'=',
    },
    controller: function($scope, NoteFactory) {
      $scope.numberClicked = 0;
      $scope.notes = NoteFactory.getNotes(1000);

      $scope.$on('note:clicked', function(){
        $scope.numberClicked++;
        $scope.$apply();
        console.log('noteList heard clicked');
      });
    },
  };

});
