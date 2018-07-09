//BackEnd
function Pig(globalScore, roundScore, tempScore) {
  this.globalScore = 0;
  this.roundScore = 0;
  this.tempScore = 0;
}

var tempScore = Math.floor(Math.random() * 6) + 1;
var roundScore = tempScore + tempScore;
var globalScore = roundScore + roundScore;

//FrontEnd

$(document).ready(function() {
  $("#roll-dice").click(function() {
    $("#score-0"); return tempscore();


  });
});
