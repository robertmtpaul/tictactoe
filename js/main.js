console.log('Tic Tac Toe!');

//Turn tracker: global variable that tracks from the outset how many turns have been taken. 

let numberOfTurns = 0;
let didTheyWin = false;

$(document).ready(function () {    //Start of jQuery DOM handling.   

  //Function to run to check with z conditional logic whether combination of moves wins the game. 
  const checkCombination = function () {
    let cell1 = $(".cell1").html();
    let cell2 = $(".cell2").html();
    let cell3 = $(".cell3").html();
    let cell4 = $(".cell4").html();
    let cell5 = $(".cell5").html();
    let cell6 = $(".cell6").html();
    let cell7 = $(".cell7").html();
    let cell8 = $(".cell8").html();
    let cell9 = $(".cell9").html();
    
    // Check if cells aren't empty, and if not, runs conditional logic
    if ( cell1 !== "" && cell1 === cell2 && cell3 === cell2 ) {
      didTheyWin = true;
      console.log("Top row identical");
      numberOfTurns = 0;
    } else if ( cell4 !== "" && cell4 === cell5 && cell5 === cell6 ) {
      //Check if the player has a horizontal middle row of the same item. 
      didTheyWin = true;
      console.log("Middle row identical");
      numberOfTurns = 0;
    } else if ( cell7 !== "" && cell7 === cell8 && cell9 === cell8 ) {
      //Checks if the player has a horizontal bottom row of the same item.
      didTheyWin = true;
      console.log("Bottom row identical");
      numberOfTurns = 0;
    } else if ( cell1 !== "" && cell1 === cell4 && cell7 === cell4 ) {
      //Checks if the player has left column of the same item.
      didTheyWin = true;
      console.log("Left column identical");
      numberOfTurns = 0;
    } else if ( cell2 !== "" && cell2 === cell5 && cell8 === cell5 ) {
      //Checks if the player has middle column of the same item.
      didTheyWin = true;
      console.log("Middle column identical");
      numberOfTurns = 0;
    } else if ( cell3 !== "" && cell3 === cell6 && cell9 === cell6 ) {
      //Checks if the player has right column of the same item.
      didTheyWin = true;
      console.log("Right column identical");
      numberOfTurns = 0;
    } else if ( cell1 !== "" && cell1 === cell5 && cell9 === cell5 ) {
      //Checks if there is a diagonal combination of same item.
      didTheyWin = true;
      console.log("Diagonals identical");
      numberOfTurns = 0;
    } else if ( cell3 !== "" && cell3 === cell5 && cell7 === cell5 ) {
      //Checks if there is a diagonal combination of same item.
      didTheyWin = true;
      console.log('Diagonals identical');
      numberOfTurns = 0;
    } else if (numberOfTurns >= 9) {
      //Checks if all turns have been taken, and tells the players it's a draw.
      console.log("It's a draw");
      $('#dialog span').html("It's a draw. Play again!");
      $('#dialog').show();
      numberOfTurns = 0;
    }
    //end of conditional statements
  } //end of checkCombination function.

  $('.cell').click(function () {
    console.log('cell clicked!');
    if ($(this).html() === '') {
      if (numberOfTurns % 2 === 0) {
        //Adds X to cell after click event.
        $(this).html('<i class="fas fa-hands-wash"></i>');
        //Switches turn to next player
        numberOfTurns += 1;
        //Checks if the move has won the game.
        checkCombination();
        if (didTheyWin === true) {
          $('#dialog span').html('Player <i class="fas fa-hands-wash"></i> wins.');
          $('#dialog').show();

        }
        // get function to return true/false value of checkCom.. to indicate win
        console.log(numberOfTurns);
      } else {
        //Add 'O' mark to cell after click event.
        $(this).html('<i class="fas fa-virus"></i>');
        //Switches turn to next player
        numberOfTurns += 1;
        console.log(numberOfTurns)
        //Checks if the move has won the game.
        checkCombination();
        if (didTheyWin === true) {
          $('#dialog span').html('Player <i class="fas fa-virus"></i> wins.');
          $('#dialog').show();
        }
      }
    }
  }); // jQuery - click function.

  $('#dialog').click(function () {
    // console.log('close dialog');
    numberOfTurns = 0;
    $('.cell').html('');
    $('#dialog').hide();
    didTheyWin = false;
  });

}); //end jQuery - document.ready





