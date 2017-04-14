$(document).ready(createNewGame);

function createNewGame() {
    game = new GuessGame();
    game.init();
}

function GuessGame() {
    this.randomNum = null;
    this.guessArr = [];
    // **** GENERATE NUM **** //
    this.init = function() {
        this.randomNum = this.randomizeNum();
        $("#submitBtn").click(this.makeGuess.bind(this));
    };
    this.randomizeNum = function() {
        return Math.floor(Math.random() * 20) + 1;
    };
    // **** DISPLAY TO DOM **** //
    this.showResponse = function(result) {
        $("#responseDiv").text(result);
    };
    // **** RESET INPUT **** //
    this.resetGame = function() {
        this.randomNum = this.randomizeNum();
        $("#guessInput").val('');
    };
    // **** USER GUESS FUNCTION **** //
    this.makeGuess = function() {
        this.guess = parseInt($("#guessInput").val());
        // console.log(this);
        this.guessArr.push(this.guess);
        if(this.guess < 0 || this.guess > 20) {
            this.showResponse("Please enter proper input");
        }
        else if (this.guess > this.randomNum) {
            this.showResponse("Too High");
        }
        else if (this.guess > this.randomNum) {
            this.showResponse("Too Low");
        }
        else {
            this.showResponse("You guessed it");
        }
        this.resetGame();
    }
}