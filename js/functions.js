{
function playGame(playerInput) {
	clearMessages();

	function getMoveName(argMoveId) {
		if (argMoveId === '1') {
			return 'kamień';
		} else if (argMoveId === '2') {
			return 'papier';
		} else if (argMoveId === '3') {
			return 'nożyce';
		} else {
			printMessage('Nie znam ruchu o id ' + argMoveId + '.');
			return 'nieznany ruch';
		}
	}
	
	function displayResult(computerMove, playerMove) {
		console.log('wywołano funkcje displayResult');
		printMessage('Zagrałem ' + computerMove + ', a Ty zagrałeś ' + playerMove + '.');
		if (playerMove === 'nieznany ruch') {
			printMessage('Nie rozumiem co pokazałeś :-(');
		} else if (computerMove === 'kamień' && playerMove === 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove === 'nożyce' && playerMove === 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove === 'papier' && playerMove === 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove === playerMove) {
			printMessage('Remis!');
		} else {
			printMessage('Przegrywasz!');
		}
	}

	function printMessage(msg){
		const div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		console.log ('clear messages done')
		document.getElementById('messages').innerHTML = '';
	}

	//Player Move
	console.log('Gracz wpisał: ' + playerInput);
	const playerMove = getMoveName(playerInput);
	console.log ('ruch gracza to ' + playerMove);

	//Computer Move
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	const computerMove = getMoveName(String(randomNumber));
	console.log('Ruch komputera to ' + computerMove);

	//Game Result
	displayResult(computerMove, playerMove);
}

//Listeners

document.getElementById("play-rock").addEventListener("click", function() {
	console.log ('button clicked play-rock');
	playGame('1');
});
document.getElementById("play-paper").addEventListener("click", function() {
	console.log ('button clicked play-paper');
	playGame('2');
});
document.getElementById("play-scissors").addEventListener("click", function() {
	console.log ('button clicked play-scissors');
	playGame('3');
});
}