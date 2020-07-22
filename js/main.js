console.log('Tic Tac Toe!');

// Track the number of turns a player has had, to check,  


    // 0. Turn tracker. There should be a global variable from the outset that checks... how many turns have been taken and switches to 'X' or 'O' depending on the amount

    let numberOfTurns = 1;
    
    $(document).ready ( function() {       
        

        // const areAllThreeTheSame = function(input1,input2,input3) {
        //     return input1 === input2 === input3;
        // }

        const checkCombination = function (input) {
            // check if the player has a horizontal row of the same item.
                // if (areAllThreeTheSame($('.cell1').text(), $('.cell2').text(),$('.cell3').text() ) )  
            if ( $('.cell1').text() && $('.cell2').text() && $('.cell3').text() === 'X' ) { 
             
                return true;
                console.log('Player won')
            } 
            else if ( $('.cell4').text() && $('.cell5').text() && $('.cell6').text() ) {
                return true;
                console.log('Player won')        
            } 
            else if ( $('.cell7').text() && $('.cell8').text() && $('.cell9').text() ) {
                return true;
                console.log('Player won')        
            }
            //check if player has a vertical row
            else if ( $('.cell1').text() && $('.cell4').text() && $('.cell7').text() ) {
                return true;
                console.log('Player won')        
            }
            else if ( $('.cell2').text() && $('.cell5').text() && $('.cell8').text() ) {
                return true;
                console.log('Player won')        
            }
            else if ( $('.cell3').text() && $('.cell6').text() && $('.cell9').text() ) {
                return true;
                console.log('Player won')        
            }
            //check if player has diagonal combo
            else if ( $('.cell1').text() && $('.cell5').text() && $('.cell9').text() ) {
                return true;
                console.log('Player won')        
            }
            else if ( $('.cell3').text() && $('.cell5').text() && $('.cell7').text() ) {
                return true;
                console.log('Player won')        
            }

            } //check combination.

// if cells aren't empty, then run the checkWinningMove. 

        $('.cell').click(function(){            
            console.log('cell clicked!');
            if(numberOfTurns % 2 === 0) {
                // Tell the user that it's player 1's turn.
                $('#gameMessage').html("It's Player 1's turn");
                //Adds circle to cell after click event.
                $(this).html('X');
                numberOfTurns += 1;
                checkCombination();
            } else {
                //Tell the user that it's player 2's turn.
                $('#gameMessage').html("It's Player 2's turn");
                //Add 'O' mark to cell in grid.
                $(this).html('O');
                numberOfTurns += 1;
                checkCombination();
            }
            
        }); // jQuery - click function.
        
        // RESET BUTTON:
        //  reset all cell divs to have no HTML
        // target all divs with cell class and give zero value with .html jqueryll..
       
        
    //3. When the player manages to have 3 'X' or 'O' in a row, or diagonally, they should win the round.
        // --> a function could check whether there are winning moves in the grid.




    // 4. The game should finish when player wins, and keep track of how many times the player has won.
            // --> global variable for number of wins
            // --> the game should keep adding to the variable depending on the outcome of the game.
    // 5. 




}); //end jQuery - document.ready





