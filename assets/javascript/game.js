$(document).ready(function() {
 var randomcomp = Math.floor(Math.random() * 100) + 20;
 var randomplayerb1 = Math.floor(Math.random() * 18) + 1;
 var randomplayerb2 = Math.floor(Math.random() * 18) + 1;
 var randomplayerb3 = Math.floor(Math.random() * 18) + 1;
 var randomplayerb4 = Math.floor(Math.random() * 18) + 1;
 var playerscore=0;
 var button1 = 0;
 var button2 = 0;
 var button3 = 0;
 var button4 = 0;
 var wins = 0;
 var losses = 0;
 $("#compscore").html(randomcomp);

 function youwin(){
  $("#wonorlost").html("You won!!!");
  wins++;
  $("#wins").html(wins);
  reset ();
 }

 function youlost(){
  $("#wonorlost").html("You lost!!!");
  losses++;
  $("#losses").html(losses);
  reset ();
 }

function reset (){
   randomcomp = Math.floor(Math.random() * 100) + 20;
   randomplayerb1 = Math.floor(Math.random() * 18) + 1;
   randomplayerb2 = Math.floor(Math.random() * 18) + 1;
   randomplayerb3 = Math.floor(Math.random() * 18) + 1;
   randomplayerb4 = Math.floor(Math.random() * 18) + 1;
   playerscore=0;
   button1 = 0;
   button2 = 0;
   button3 = 0;
   button4 = 0;
   $("#realtimescore").html(playerscore);
   $("#compscore").html(randomcomp);
}

   $('#num1').on('click', function(){
      if (playerscore < randomcomp){
        playerscore = playerscore+randomplayerb1;
    $("#realtimescore").html(playerscore);
    checkscore ();}
    })

    $('#num2').on('click', function(){
      if (playerscore < randomcomp){
        playerscore = playerscore+randomplayerb2;
    $("#realtimescore").html(playerscore);
    checkscore ();}
    })

    $('#num3').on('click', function(){
      if (playerscore < randomcomp){
        playerscore = playerscore+randomplayerb3;
    $("#realtimescore").html(playerscore);
    checkscore ();} 
    })

    $('#num4').on('click', function(){
      if (playerscore < randomcomp){
        playerscore = playerscore+randomplayerb4;
    $("#realtimescore").html(playerscore);
    checkscore ();}
    })

    function checkscore (){
      if (playerscore ==randomcomp){
        youwin();
      }
      else if (playerscore > randomcomp){
        youlost();
      }
    }


})
