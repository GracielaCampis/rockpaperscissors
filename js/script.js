// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$("#shoot").click(function() {

let shootie = Math.random();
    console.log(shootie);
    if (shootie <= .33) {
        $("#result").text("paper");
    }
    else if(shootie > .66) {
        $("#result").text("scissors");
    }
    else {
        $("#result").text("rock");
    }

    console.log("yay")
});
//put everything into a "let" and do something like if user === this 
//and computer Choice === this it'll do it. Do what we have learned. 