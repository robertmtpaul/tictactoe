# README - Tic-Tac-Toe

This is a simple Tic-Tac-Toe game played in the browser, powered by HTML, CSS and JavaScript with jQuery for DOM manipulation. 

The game must be played in a browser, and has been verified to work in Chrome, Firefox and Safari browsers at this time.


**How was the game built?**

I have used conditional logic in JavaScript on jQuery targeted DOM elements to see if the user has clicked a box. A global variable 'numberOfTurns' checks how many turns have been taken and switches between the tokens based on the number of turns. 

The conditional logic further checks for a winning combination of moves by seeing if all boxes are of equal value, on every click event. Each time a user clicks, a click event checks with conditional logic if all turns have been taken and displays a CSS modal window notifying the users if so.

The grid resets at the end of the game: when a player wins or there is a draw. 

**How do you play Tic-Tac-Toe?**

- The game can be played by two players who take turns to add their token, a handwashing icon or a virus icon to a 3x3 grid, and try to get a winning combination.

- A winning combination is three icons horizontally, vertically, or diagonally. The game ends when the players get a winning combination or all boxes in the grid are filled.





BUGS:
- when click reset button, doesn't reset all turns

- When window resized, boxes are displayed on different lines, confusingly






When the player manages to have 3 'X' or 'O' in a row, or diagonally, they should win the round.
    // --> a function could check whether there are winning moves in the grid.

// 4. The game should finish when player wins, and keep track of how many times the player has won.
        // --> the game should keep adding to the variable depending on the outcome of the game.


// 5. There should be a button to clear the grid and play counters


RESET BUTTON:
reset all cell divs to have no HTML












BRIEF:



Technical Requirements
Your app must:

- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select); your game should prevent users from playing - a turn into a square that is already occupied
- Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use Javascript with jQuery for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)




Necessary Deliverables
A working game, built by you, hosted somewhere on the internet
A link to your hosted working game in the URL section of your Github repo
A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
On Friday of project week everyone individually presents their project to the class, with an overview of the app and a brief code tour of the highlights.
EVERYONE PRESENTS ON FRIDAY
Suggested Ways to Get Started
Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
USE GIT: Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

