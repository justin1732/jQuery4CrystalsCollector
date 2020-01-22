$( document ).ready(function(){
    // Generates random number to guess
    var Random=Math.floor(Math.random()*102+19)
    
    // Display random number
    $('#matchmaker').text(Random);
    
    //Variables and generators
    var numberRed= Math.floor(Math.random()*12+1)
    var numberBlue= Math.floor(Math.random()*12+1)
    var numberPurple= Math.floor(Math.random()*12+1)
    var numberGreen= Math.floor(Math.random()*12+1)
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
 
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#matchmaker').text(Random);
        numberRed= Math.floor(Math.random()*12+1);
        numberPurple= Math.floor(Math.random()*12+1);
        numberGreen= Math.floor(Math.random()*12+1);
        numberBlue= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#CurrentScore').text(playerTotal);
        } 

  // Wins and losses
  function dinner(){
  alert("Winner!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function chicken(){
  alert ("You lose...");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // The click functions for crystals, winning and losing..
    $('.red').on ('click', function(){
      playerTotal = playerTotal + numberRed;
    $('#CurrentScore').text(playerTotal); 
           if (playerTotal == Random){
            dinner();
          }
          else if ( playerTotal > Random){
            chicken();
          }   
    })  
    $('.blue').on ('click', function(){
      playerTotal = playerTotal + numberBlue;
    $('#CurrentScore').text(playerTotal); 
          if (playerTotal == Random){
            dinner();
          }
          else if ( playerTotal > Random){
            chicken();
          } 
    })  
    $('.purple').on ('click', function(){
      playerTotal = playerTotal + numberPurple;
    $('#CurrentScore').text(playerTotal);
             if (playerTotal == Random){
            dinner();
          }
          else if ( playerTotal > Random){
            chicken();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + numberGreen;
    $('#CurrentScore').text(playerTotal); 
            if (playerTotal == Random){
            dinner();
          }
          else if ( playerTotal > Random){
            chicken();
          }
    });   
  }); 
