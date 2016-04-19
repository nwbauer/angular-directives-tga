angular.module('NoteService', [])

.factory('NoteFactory', function(){

  function createPhoneNumber(){
    var number = '';
    for (var i = 0; i < 10; i++) {
      number += Math.floor(Math.random()*10);
    }
    return number;
  }

  function createMessage(){
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for( var i=0; i < 20; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }


  function createNotes(howMany) {
    var notes = [];

    for (var i = 0; i < howMany; i++) {
      notes.push({
        name: 'Ted',
        phoneNumber: createPhoneNumber(),
        message: createMessage()
      });
    }
    return notes;
  }

  return {
    getNotes: createNotes,
  };
});
