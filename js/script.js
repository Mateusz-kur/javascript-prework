{
  const playGame = function(){
    const clearMessages = function(){
      document.getElementById().innerHTML = '';
    }
    const playerInput = getMoveName(argMoveId);

    function getMoveName(argMoveId){ //funkcja anonimowa w stałej nie chciała działać, więc zostawiam tak.
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else(argMoveId == 3);{
        return 'nożyce';
      }
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
  
    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(argMoveId);
  
    printMessage('Twój ruch to: ' + playerInput);

    const displayResult = function(argComputerMove = computerMove, argPlayerMove = playerInput){
      console.log('moves:', argComputerMove, argPlayerMove);
      if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
          printMessage('Ty wygrywasz!');
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
      } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
      } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
      } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
      } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
      } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
      }
    }
    displayResult();
  }
  document.getElementById('play-rock').addEventListener('click', function(){ //te funkcje są anonimowe, więc nic nie zmieniałęm.
    playGame(argMoveId = 1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(argMoveId = 2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(argMoveId = 3);
  });
}