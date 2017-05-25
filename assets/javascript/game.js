

//Establishes score and guess variables.

var wins = 0;
var losses = 0;
var guesses = 9;
var alreadyPicked = [];
var j = 0;



//Presents and updates score and guess values.

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



//Watches for a keystroke to trigger the use of a guess.
document.onkeyup = function(event){
	var key = event.key;


		var letterChecker = alreadyPicked.indexOf(key);
		if (letterChecker != -1){
			alert("You already tried that letter! Pick something else!");
			guesses++;
			updateGuesses;
		}
	

		if (key == randomPick){
			wins++;
			guesses = 9;

			//Reset
			alreadyPicked = [];
			j = 0;
			updateWins = "<p>Wins: " + wins + "</p>";
			updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";

			}

		else {
			guesses--;

			//Add to array of picked letters	
			console.log(key);	
			alreadyPicked[j] = key;
			j++;
			console.log(alreadyPicked);
			updateGuesses = "<p>Guesses: " + guesses + "</p>";
			updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";

		}

		if (guesses == 0){
			losses++;
			guesses = 9;

			//Reset
			alreadyPicked = [];
			j = 0;
			updateLosses = "<p>Losses: " + losses + "</p>";
			updatePicked = "<p>Your Guesses so far: " + alreadyPicked + "</p>";

		}

		updater();


		}