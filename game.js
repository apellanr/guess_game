$(document).ready(createNewGame);

let game = null;

function createNewGame() {
    game = new GuessGame();
    game.init();
}

function GuessGame() {
    var theObj = this;
    this.model = null;
    this.view = null;
    this.init = function() {
        this.model = new Model(this); // passing game object
        this.view = new View(this); // into the model and the view
        this.model.init();
        this.view.init();
        this.applyHandlers();
    };
    this.applyHandlers = function() {
        $("#guessInput").keypress(this.validateKeypress);
    };
    this.validateKeypress = function() {
        if(event.keyCode===13){
            $("#submitBtn").click();
        }
    };
    this.reset = function() {
        this.model.reset();
        this.view.reset();
    };
    // **** USER GUESS FUNCTION **** //
    this.makeGuess = function() {
        // console.log(this); for testing purposes
        if(isNaN(this.view.getNumber())) {
            this.view.showResponse('Invalid Input');
        }
        else if(this.view.getNumber() < 0 || this.view.getNumber() > 20) {
            this.view.showResponse("Please enter proper input");
        }
        else if (this.view.getNumber() > this.model.getNumber()) {
            this.view.showResponse("Too High");
        }
        else if (this.view.getNumber() < this.model.getNumber()) {
            this.view.showResponse("Too Low");
        }
        else {
            this.view.showResponse("You are correct! Game has now reset");
            this.reset();
        }
    }
}

// store and validate data in the system
function Model(controller) {
    this.controller = controller;
    this.randomNum = null;
    this.init = function() {
        this.randomizeNum();
    };
    this.randomizeNum = function() {
        this.randomNum = Math.floor(Math.random() * 20) + 1;
        console.log(this.randomNum);
    };
    this.reset = function() {
        this.randomizeNum();
    };
    this.getNumber = function() {
        return this.randomNum;
    }
}

// fetch value and parse. give back in proper way
function View(controller) {
    this.controller = controller;
    this.submitButton = null;
    this.responseDiv = null;
    this.guessInput = null;
    this.init = function() {
        this.submitButton = $("#submitBtn");
        this.submitButton.on('click', this.handleGuessBtnClick.bind(this));
        this.responseDiv = $("#responseDiv");
        this.guessInput = $("#guessInput");
    };
    this.handleGuessBtnClick = function() {
        this.controller.makeGuess();
    };
    this.getNumber = function() {
        var guess = parseInt(this.guessInput.val());
        return guess;
    };
    // **** DISPLAY TO DOM **** //
    this.showResponse = function(result) {
        $("#responseDiv").text(result);
    };
    this.reset = function() {
        this.guessInput.val('');
    }
}