// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
//$("#shoot").click(function() {
//var random=[
//"Rock","Paper","Scissor"
//]
//let type = $(".user").val();
//let shoot = Math.random();
  //  console.log(shoot);
  // if (shoot === "Rock" && computerChoice === "Scissor") {
  //     $("#result").html("User Wins!");
  //  }
  //  else if(shoot === "Paper" && computerChoice === "Rock") {
  //      $("#result").html("User Wins!");
   // }
   // else if (shoot === "Scissor" && computerChoice === "Paper") {
   //     $("#result").html("User Wins!");
   // }
   // else if (shoot === "Rock" && computerChoice === "Paper") {
    //    $("#result").html("User Loses!");
   // }
    //else if (shoot === "Paper" && computerChoice === "Scissor") {
     //   $("#result").html("User Loses!");
    //}
    //else if (shoot === "Scissor" && computerChoice === "Rock"){
     //   $("#result").html("User Loses!");
    //}
    //else {
      //  $("#result").html("TIE")
    //}

$("#shoot").click(function() {
    let box = $("#inside").val(); 
    let computerChoice = getComputerChoice();
});
function getComputerChoice() {
    let randNum = Math.random();
    if(randNum > 0 && randNum <= .33) {
        return "Scissors"
    }
    else if(randNum > .33 && randNum < .666) {
         return "Paper"
    }
    else if(randNum > .66 && randomNumber > .99) {
         return "Rock"
    }
    else {
        return "Tie"
    }
}); 






    console.log("shoot")

//put everything into a "let" and do something like if user === this 
//and computer Choice === this it'll do it. Do what we have learned. 