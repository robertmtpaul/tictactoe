console.log('Tic Tac Toe!');

//Turn tracker: global variable that tracks from the outset how many turns have been taken. 

let numberOfTurns = 1;

$(document).ready ( function() {    //Start of jQuery DOM handling.   

    //Function to run to check with conditional logic whether combination of moves wins the game. 
    const checkCombination = function () { 
        
        //Variable to store whether or not the player has won.
        let didTheyWin = false; 
        
        if ( 
            // Checks if cells aren't empty, and if not, runs the following conditional logic
            $(".cell1").text() !== "" && 
            //Checks if the player has a horizontal top row of the same item.        
            $(".cell1").text() === $(".cell2").text() &&
            $(".cell3").text() === $(".cell2").text()
          ) {
            didTheyWin = true;
            console.log("Top row identical");
          } else if (
            //Checks if the player has a horizontal middle row of the same item.
            $(".cell4").text() !== "" &&
            $(".cell4").text() === $(".cell5").text() &&
            $(".cell5").text() === $(".cell6").text()
          ) {
            didTheyWin = true;
            console.log("Middle row identical");
          } else if (
            //Checks if the player has a horizontal bottom row of the same item.
            $(".cell7").text() !== "" &&
            $(".cell7").text() === $(".cell8").text() &&
            $(".cell9").text() === $(".cell8").text()
          ) {
            didTheyWin = true;
            console.log("Bottom row identical");
          } else if (
            //Checks if the player has left column of the same item.
            $(".cell1").text() !== "" &&
            $(".cell1").text() === $(".cell4").text() &&
            $(".cell7").text() === $(".cell4").text()
          ) {
            didTheyWin = true;
            console.log("Left column identical");
          } else if (
            //Checks if the player has middle column of the same item.
            $(".cell2").text() !== "" &&
            $(".cell2").text() === $(".cell5").text() &&
            $(".cell8").text() === $(".cell5").text()
          ) {
            didTheyWin = true;
            console.log("Middle column identical");
          } else if (
            //Checks if the player has right column of the same item.
            $(".cell3").text() !== "" &&
            $(".cell3").text() === $(".cell6").text() &&
            $(".cell9").text() === $(".cell6").text()
          ) {
            didTheyWin = true;
            console.log("Right column identical");
          }
          else if (
            //Checks if there is a diagonal combination of same item.
            $(".cell1").text() !== "" &&
            $(".cell1").text() === $(".cell5").text() &&
            $(".cell9").text() === $(".cell5").text()
          ) {
            didTheyWin = true;
            console.log("Diagonals identical");
          } else if (
            //Checks if there is a diagonal combination of same item.
            $(".cell3").text() !== "" &&
            $(".cell3").text() === $(".cell5").text() &&
            $(".cell7").text() === $(".cell5").text()
          ) {
            didTheyWin = true;
            console.log('Diagonals identical');        
        }//end of conditional statements
    } //end of checkCombination function.

    $('.cell').click(function(){            
        console.log('cell clicked!');
        if ($(this).text() === '') {
            if (numberOfTurns % 2 === 0){
                // Show whose turn it is.
                $('#gameMessage').html("It's Player 1's turn");
                //Add X to cell after click event.
                $(this).html('X');
                //Check if the move has won the game.
                checkCombination();  
                //Switch turn to next player
                numberOfTurns += 1;
            } else {
                // Show whose turn it is.
                $('#gameMessage').html("It's Player 2's turn");
                //Add 'O' mark to cell after click event.
                $(this).html('O');
                //Check if the move has won the game.
                checkCombination();
                //Switch turn to next player
                numberOfTurns += 1;
            }
        }
    }); // jQuery - click function.
    
    // RESET BUTTON: resets all cell divs to have no HTML so that players can restart.
    $('#button').click(function(){
        // console.log('clear game');
        $('.cell').html('');
    });   
}); //end jQuery - document.ready





