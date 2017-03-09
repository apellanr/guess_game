var the_number = null;

function pick_number(){ //declared function
    var random_number = Math.floor(Math.random() * (10) + 1); // inclusive at both min and max
    the_number = random_number;
    return random_number;
}

$(document).ready(function(){ //click handler
    $("button").click(function(){ //click() method attaches a fxn to run when a click event occurs
        return make_guess();
    });
});

function make_guess(){ //declared function
    var the_guess = parseInt($("#guess_input").val(), 10); //val() will get value from user input field
    if (the_guess > the_number){
        $("#response_div").text("Too High!");
    } else if (the_guess < the_number){
        $("#response_div").text("Too Low!");
    } else if (the_guess === the_number){
        $("#response_div").text("You guessed it!");
    } else {
        $("#response_div").text("Choose # from 1-10.")
    }
}

// function reset() {
//     document.getElementById("response_div").reset();
//     pick_number();
// }