var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

$(document).ready(function(){
  $(".current-score#current-0").innerHTML = dice;

});
