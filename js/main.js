console.log('Tic Tac Toe!');

// Track the number of turns a player has had, to check,  

let numberOfTurns = 0;




        // 0. Turn tracker. There should be a global variable from the outset that checks... how many turns have been taken and switches to 'X' or 'O' depending on the amount
        // const checkTurns = function () {
        //     if( numberOfTurns === 1) {
        //         console.log('player has taken a turn');
        //     } 
        // }

        // 1. User should be able to click on an individual cell and add an 'O' or 'X'

        $(document).ready ( function() {

            $('.cell').on('click', function(){
                console.log('cell clicked!');
                $(this).addClass("far fas fa-circle");
                let numberOfTurns = 1;
                // $(this).addClass("far fa-times");
                console.log(numberOfTurns)
            }); // jQuery - click function.
        
        // 2. The game should check how many turns have been taken and switch to 'X' or 'O' depending on whose turn it is.

        // 2B. The game shows the user whose turn it is, at the top

        //3. When the player manages to have 3 'X' or 'O' in a row, or diagonally, they should win the round.

        // 4. The game should finish when player wins, and keep track of how many times the player has won.
                // --> global variable for number of wins
                // --> the game should keep adding to the variable depending on the outcome of the game.
        // 5. 




}); //end jQuery - document.ready











// Necessary Deliverables
// A working game, built by you, hosted somewhere on the internet
// A link to your hosted working game in the URL section of your Github repo
// A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// On Friday of project week everyone individually presents their project to the class, with an overview of the app and a brief code tour of the highlights.
// EVERYONE PRESENTS ON FRIDAY
// Suggested Ways to Get Started
// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// USE GIT: Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

