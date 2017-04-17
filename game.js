$(document).ready(createNewGame);

let game = null;

function createNewGame() {
    game = new GuessGame();
    game.init();
}

function GuessGame() {
    this.randomNum = null;
    this.guessArr = [];
    // **** GENERATE NUM **** //
    this.init = function() {
        this.generateRandom();
        this.applyHandlers();
    };
    this.applyHandlers = function() {
        $("#submitBtn").click(this.makeGuess.bind(this));
        $("#guessInput").keypress(this.validateKeypress);
    };
    this.validateKeypress = function() {
        if(event.keyCode===13){
            $("#submitBtn").click();
        }
    };
    this.randomizeNum = function() {
        var number = Math.floor(Math.random() * 20) + 1;
        console.log(number);
        return number;
    };
    // **** DISPLAY TO DOM **** //
    this.showResponse = function(result) {
        $("#responseDiv").text(result);
    };
    // **** RESET INPUT **** //
    this.generateRandom = function() {
        this.randomNum = this.randomizeNum();
    };
    // **** USER GUESS FUNCTION **** //
    this.makeGuess = function() {
        var guess = parseInt($("#guessInput").val());
        // console.log(this); for testing purposes
        this.guessArr.push(guess);
        if(isNaN(guess)) {
            this.showResponse('Invalid Input');
        }
        else if(guess < 0 || guess > 20) {
            this.showResponse("Please enter proper input");
        }
        else if (guess > this.randomNum) {
            this.showResponse("Too High");
        }
        else if (guess < this.randomNum) {
            this.showResponse("Too Low");
        }
        else {
            this.showResponse("You are correct! Game has now reset");
            this.generateRandom();
        }
        $("#guessInput").val('');
    }
}