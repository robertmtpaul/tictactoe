console.log('Tic Tac Toe!');

// Track the number of turns a player has had, to check,  


// 0. Turn tracker. There should be a global variable from the outset that checks... how many turns have been taken and switches to 'X' or 'O' depending on the amount

let numberOfTurns = 1;


$(document).ready ( function() {       
    
    // const areAllThreeTheSame = function(input1,input2,input3) {
    //     return input1 === input2 === input3;
    // }

    const checkCombination = function () {
        let didTheyWin = false;
        // Check if cells aren't empty, and if not, runs the checkWinningMove. 
        
        //check if the player has a horizontal row of the same item. 
        if ($('.cell1').text() !== '' && $('.cell1').text() === $('.cell2').text() && $('.cell3').text() === $('.cell2').text() ) { 
            didTheyWin = true;
            console.log('Top row identical')
        } 
        else if ( $('.cell4').text() !== '' && $('.cell4').text() === $('.cell5').text() && $('.cell5').text() === $('.cell6').text() ) {
            // didTheyWin = true;
            console.log('Middle row identical')        
        } 
        else if ( $('.cell7').text() !== '' && $('.cell7').text() === $('.cell8').text() && $('.cell9').text() === $('.cell8').text() ) {
            // didTheyWin = true;
            console.log('Bottom row identical');        
        }
        //check if player has a vertical row
        else if ( $('.cell1').text() !== '' && $('.cell1').text() === $('.cell4').text() && $('.cell7').text() === $('.cell4').text() ) {
            // didTheyWin = true;
            console.log('Left column identical');       
        }
        else if ( $('.cell2').text() !== '' && $('.cell2').text() === $('.cell5').text() && $('.cell8').text() === $('.cell5').text() ) {
            // didTheyWin = true;
            console.log('Middle column identical');       
        }
        else if ( $('.cell3').text() !== '' && $('.cell3').text() === $('.cell6').text() && $('.cell9').text() === $('.cell6').text() ) {
            // didTheyWin = true;
            console.log('Right column identical');        
        }
        //check if player has diagonal combo
        else if ( $('.cell1').text() !== '' && $('.cell1').text() === $('.cell5').text() && $('.cell9').text() === $('.cell5').text() ) {
            // didTheyWin = true;
                console.log('Diagonals identical');        
        }
        else if ( $('.cell3').text() !== '' && $('.cell3').text() === $('.cell5').text() && $('.cell7').text() === $('.cell5').text() ) {
            // didTheyWin = true;
                console.log('Diagonals identical');        
        }//end of conditional statements
    } //end of checkCombination function.


    $('.cell').click(function(){            
        console.log('cell clicked!');
        if (numberOfTurns % 2 === 0){
            // Tell the user that it's player 1's turn.
            $('#gameMessage').html("It's Player 1's turn");
            //Adds X to cell after click event.
            $(this).html('X');
            numberOfTurns += 1;
            checkCombination();  
        } else {
            //Tell the user that it's player 2's turn.
            $('#gameMessage').html("It's Player 2's turn");
            //Add 'O' mark to cell after click event.
            $(this).html('O');
            numberOfTurns += 1;
            checkCombination();
        }
    }); // jQuery - click function.
 
    
//3. When the player manages to have 3 'X' or 'O' in a row, or diagonally, they should win the round.
    // --> a function could check whether there are winning moves in the grid.

// 4. The game should finish when player wins, and keep track of how many times the player has won.
        // --> global variable for number of wins
        // --> the game should keep adding to the variable depending on the outcome of the game.
// 5. There should be a button to clear the grid and play counters
    
    // RESET BUTTON:
    //  reset all cell divs to have no HTML
    $('#button').click(function(){
        // console.log('clear game');
        $('.cell').html('');

    });   
}); //end jQuery - document.ready





