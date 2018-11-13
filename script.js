// Player given a random number at the start of the game
var goal = Math.floor(Math.random() * 101) + 19;
console.log(goal);
var score = 0;
var wins = 0;
var losses = 0;
// 4 crystals can be clicked, each one awards a specific point value to user if clicked
var blue = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
// a crystal can be clicked multiple times, adding the same amount to score each time
newGame();

$("#blue").on("click", function() {
  add(blue);
});
$("#green").on("click", function() {
  add(green);
});
$("#red").on("click", function() {
  add(red);
});
$("#yellow").on("click", function() {
  add(yellow);
});
// each NEW GAME, the values of crystals will be randomized again

// User WINS by MATCHING SCORE with RANDOM NUMBER (goalNum)
// User LOSES  if SCORE goes ABOVE goalNum

/* param value - an integer to be added to users score */
function add(value) {
  score += value;
  //user WINS
  if (score === goal) {
    $("#game-status").html("You Win!");
    wins++;
    updateUI();
    newGame();
  }
  else if (score < goal) {
    updateUI();
  }
  else {
    $("#game-status").html("You Lose!");
    losses++;
    updateUI();
    newGame();
  }
}

function updateUI() {
  $("#score").html(score);
  $("#wins").html(wins);
  $("#losses").html(losses);
  $("#goal").html(goal);
}

function newGame() {
  score = 0;
  goal = Math.floor(Math.random() * 101) + 19;
  blue = Math.floor(Math.random() * 12) + 1;
  green = Math.floor(Math.random() * 12) + 1;
  red = Math.floor(Math.random() * 12) + 1;
  yellow = Math.floor(Math.random() * 12) + 1;
  updateUI();
  $("#game-status").html("In Progress...");
}