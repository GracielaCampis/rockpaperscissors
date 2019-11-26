// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$("#shoot").click(function() {

let shootie = Math.random();
    console.log(shootie);
    if (shootie > .10) {
        $("#result").text("paper");
    }
    else if(shootie < .20) {
        $("#result").text("scissors");
    }
    else (shootie < .30) {
        $("#result").text("rock");
    }
});