// Generate a random number between 19 and 120
$(document).ready(function(){
	var computerNum = Math.floor(Math.random() * 102) +19;
	$("#randNum").text(computerNum);

// Global variables
	var crystalNumbers = [];
	var winsCount = 0;
	var lossesCount = 0;
	var totalScore = 0;


// Update DOM
	$("#wins").text(winsCount);
	$("#losses").text(lossesCount);
	$("#addNum").text(totalScore);

// Generate random numbers for each crystal
	function crystalRandNumbers() {
		for (var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random() * 12) +1;
			crystalNumbers.push(num);
		}
	}

	crystalRandNumbers();

// Start game
	function startGame() {
		$("#win-message").empty();
		$("#lose-message").empty();
		computerNum = Math.floor(Math.random() * 102) +19;
		$("#randNum").text(computerNum);
		crystalNumbers = [];
		crystalRandNumbers();
		totalScore = 0;
		$("#addNum").text(totalScore);
	}

// Wins
	function winner() {
		winsCount++;
		$("#wins").text(winsCount);
		$("#win-message").html("<h2>You Won!!!</h2>");
		playSounds("assets/sounds/winsound.wav");

		setTimeout(startGame, 3000);
	}

// Losses
	function losser() {
		lossesCount++;
		$("#losses").text(lossesCount);
		$("#lose-message").html("<h2>You Lost!!!</h2>");
		playSounds("assets/sounds/fail-buzzer-01.mp3");

	setTimeout(startGame, 3000);

	}

// Play sounds
	function playSounds(gameSounds) {
		var audio = new Audio(gameSounds);
        audio.play();
	}


// Clicks for crystals
	$("#first").on("click", function(){
		totalScore = totalScore + crystalNumbers[0];
		$("#addNum").text(totalScore);

			if (totalScore === computerNum) {
				winner();
			}
			else if (totalScore > computerNum) {
				losser();
			}
	})

	$("#second").on("click", function(){
	totalScore = totalScore + crystalNumbers[1];
	$("#addNum").text(totalScore);

		if (totalScore === computerNum) {
			winner();
		}
		else if (totalScore > computerNum) {
			losser();
		}
	})

	$("#third").on("click", function(){
	totalScore = totalScore + crystalNumbers[2];
	$("#addNum").text(totalScore);

		if (totalScore === computerNum) {
			winner();
		}
		else if (totalScore > computerNum) {
			losser();
		}
	})

	$("#fourth").on("click", function(){
	totalScore = totalScore + crystalNumbers[3];
	$("#addNum").text(totalScore);

		if (totalScore === computerNum) {
			winner();
		}
		else if (totalScore > computerNum) {
			losser();
		}
	})



})