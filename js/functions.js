function getMoveName(argMoveId){
	if(argMoveId == 1){
	  	return 'kamień';
	} else if (argMoveId == 2){
		return 'papier';
	} else if (argMoveId == 3){
		return 'nożyce';
	} 
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}
  
function displayResult(computerMove, playerMove){
	console.log('wywołano funkcje displayResult');
	printMessage('Zagrałem ' + computerMove + ', a Ty zagrałeś ' + playerMove + '.');
	if( playerMove == 'nieznany ruch'){
		printMessage('Nie rozumiem co pokazałeś :-(');
	} else if( computerMove == 'kamień' && playerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if( computerMove == 'papier' && playerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if( computerMove == playerMove ){
		printMessage('Remis!');
	} else printMessage('Przegrywasz!');
  }

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


//Player Move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log ('ruch gracza to ' + playerMove);


//Computer Move

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log ('Ruch komputera to ' + computerMove);


//Game Result

displayResult(computerMove, playerMove);