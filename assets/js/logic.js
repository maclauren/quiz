// GIVEN I am taking a code quiz

// WHEN I click the start button
// create var for start button
// set up event listener for start button
// when button is pressed, start the quiz

// THEN a timer starts and I am presented with a question
// declare let for timer (60 secs), current question (set 0 for question 1) and interval (undefined for now)
// start and set interval
// check if time remaining is less than 0
// display value of 'time' in html
// if time remaining is 0, end the quiz

// start quiz - show start screen, show questions, start timer and present first question

// WHEN I answer a question
// THEN I am presented with another question
// get questions list and display value of current question. use a loop to get choices. display text and add buttons, with event listeners for clicks. finally, append new elements so user can click/select answer with new button elements

// selectAnswer function
// set answer/choice event parameter, set user choice to the userChoice text, set correct answer to value in the current question, add function to check the answer is correct, add text/string to let user know they are 'correct', then increment score by 10 and increment current question, do the same for incorrect but reduce time by 10secs
// correction to set score variable to 0

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all the questions are answered (or the timer reaches 0, written at line 21 in the timer function)
// THEN the game is over

// WHEN the game is over
// endQuiz function, clear the timer, hide questions and show end-screen, show final score value

// displayFeedback function
// select feedback element, remove hide, set timeout to 1 second and add hide again

// THEN I can save my initials and score
// add save function, create initials variable from html, create highscores variable (will need to use localstorage and parse JSON data)
// add event listener to submit to save the score and stop submit default


//questionsList
