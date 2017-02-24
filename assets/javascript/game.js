// Generate a random number between 19 and 120
$(document).ready(function(){
	var computerNum = Math.floor(Math.random() * 102) +19;
	console.log(computerNum);
	$("#randNum").text(computerNum);

// Global variables
	var crystalNumbers = [];
	var winsCount = 0;
	var lossesCount = 0;
	var totalScore = 0;
	var winLoss = false;
	var gameOver = false;


// Update Wins and Losses DOM
	$("#wins").text(winsCount);
	$("#losses").text(lossesCount);
	$("#addNum").text(totalScore);

// Generate random numbers for each crystal
	function crystalRandNumbers() {
		for (var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random() * 12) +1;
			crystalNumbers.push(num);
		}
		console.log(crystalNumbers);
	}

	crystalRandNumbers();

// Reset the game
	function gameReset() {
		computerNum = Math.floor(Math.random() * 102) +19;
		console.log(computerNum);
		$("#randNum").text(computerNum);
		crystalNumbers = [];
		crystalRandNumbers();
		totalScore = 0;
		$("#addNum").text(totalScore);
	}

// Win
	function winner() {
		//alert("You won!!!");
		$("#win-message").html("<h2>You Won!!!</h2>").fadeOut(5000);
		winsCount++;
		$("#wins").text(winsCount);
		gameReset();
	}

// Loss
	function losser() {
		//alert("You lose!!!");
		$("#lose-message").html("<h2>You Lost!!!</h2>").fadeOut(5000);
		lossesCount++;
		$("#losses").text(lossesCount);
		gameReset();
	}

// Clicks for crystals
	$("#first").on("click", function(){
		totalScore = totalScore + crystalNumbers[0];
		console.log("New total: " + totalScore);
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
	console.log("New total: " + totalScore);
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
	console.log("New total: " + totalScore);
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
	console.log("New total: " + totalScore);
	$("#addNum").text(totalScore);

		if (totalScore === computerNum) {
			winner();
		}
		else if (totalScore > computerNum) {
			losser();
		}
	})



})