$(document).ready(init);
let randomNum = null;
let guessArr = [];

function init(){
    randomNum = randomizeNum();
    $("#submitBtn").click(makeGuess);
}

// RANDOM NUMBER GENERATED //
function randomizeNum(){
    return Math.floor(Math.random() * 20) + 1;
}

function showResponse(result){
    $("#responseDiv").text(result);
}

function reset(){
    randomNum = randomizeNum();
    $("#guessInput").val('');
}

// FOR USER GUESS //
function makeGuess() {
    let guess = parseInt($("#guessInput").val());
    guessArr.push(guess);
    if (guess < 0 || guess > 20) {
        showResponse("Please enter a proper input");
    } else if (guess > randomNum) {
        showResponse("Too High");
    }
    else if(guess < randomNum) {
        showResponse("Too Low");
    }
    else {
        showResponse("You guessed it");
    }
    reset();
}
