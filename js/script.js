function playGame(){
  function clearMessages(){
    document.getElementById().innerHTML = '';
  }
  let playerInput = getMoveName(argMoveId);

  function getMoveName(argMoveId){
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
  function displayResult(argComputerMove = computerMove, argPlayerMove = playerInput){
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

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
 
  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(argMoveId);
 
  printMessage('Twój ruch to: ' + playerInput);
  displayResult();

}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(argMoveId = 1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(argMoveId = 2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(argMoveId = 3);
});