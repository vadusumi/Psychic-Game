

//Establishes score and guess variables.
//Variable 'j' sets the current place in array 'alreadyPicked'.


var wins = 0;
var losses = 0;
var guesses = 9;
var alreadyPicked = [];
var j = 0;



//Presents and updates score and guess values.
//The logic here was to package all update-related code into one function
//that could then be called when needed. Turns out I only needed to call
//it twice, and the update variables still manually needed to be updated on keypress,
//so I didn't really save myself any work.


var updateWins = "<p>Wins: " + wins + "</p>";
var updateLosses = "<p>Losses: " + losses + "</p>";
var updateGuesses = "<p>Guesses: " + guesses + "</p>";
var updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";



function updater(){
	var gameUpdate = document.getElementById("gameDiv");
	gameUpdate.innerHTML = updateWins + updateLosses + updateGuesses + updatePicked;
	}

updater();
	


//Creates the array from which a letter will be randomly picked.

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
				"n","o","p","q","r","s","t","u","v","w","x","y","z"];



//Randomly picks a letter.
var randomPick = alphabet[Math.floor(Math.random()*alphabet.length)];


console.log(randomPick);



//Watches for a keystroke to trigger the use of a guess, letter checks and win/loss checks.
//Translates input to lower-case for checks against 'randomPick' later.

//For unknown reasons, line 58 works while the page is loaded from my computer, 
//but the identical page on Github is not translating to lower-case.
//I don't even know how to begin to explain that discrepancy.
document.onkeyup = function(event){
	var upperKey = event.key;
	var key = upperKey.toLowerCase();


//Checks for letters you've already picked and sends an alert.
//Prevents guesses from depleting on duplicate letters.
		var letterChecker = alreadyPicked.indexOf(key);
		if (letterChecker != -1){
			alert("You already tried that letter! Pick something else!");
			guesses++;
			updateGuesses = "<p>Guesses: " + guesses + "</p>";
		}


//Prevents guesses from depleting on non-alphabet keys.
		var symbolChecker = alphabet.indexOf(key);
			if (symbolChecker == -1){
				alert("That's not a letter, doofus. Try again.");
				guesses++;
				updateGuesses = "<p>Guesses: " + guesses + "</p>";
			}


//Prevents cheating by repeatedly striking non-alphabet keys to trigger both letterChecker
//and symbolChecker and thereby get two guesses for one keystroke.
		if (symbolChecker == -1 && letterChecker != -1){
			guesses--;
			updateGuesses = "<p>Guesses: " + guesses + "</p>";
		} 

//Win condition.
		if (key == randomPick){
			wins++;

			//Reset
			guesses = 9;
			alreadyPicked = [];
			j = 0;
			updateWins = "<p>Wins: " + wins + "</p>";
			updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";

			}

//Depletes guesses on incorrect letter choice.
		else {
			guesses--;

			//Add to array of picked letters. Console logs for easier testing.	
			console.log(key);	
			alreadyPicked[j] = key;
			j++;
			console.log(alreadyPicked);
			updateGuesses = "<p>Guesses: " + guesses + "</p>";
			updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";

		}

//Loss condition.
		if (guesses == 0){
			losses++;
			

			//Reset
			guesses = 9;
			alreadyPicked = [];
			j = 0;
			updateLosses = "<p>Losses: " + losses + "</p>";
			updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";

		}

		updater();


		}