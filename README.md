# quiz
A timed, multiple-choice coding quiz that can keep track of high scores and quiz-takers' initials.

## User story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers


## Acceptance criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## Method

1. Added comments to mark up HTML file
2. Wrote pseudocode
3. Wrote dummy questions in questions.js
4. Added start button and event listener to start the quiz
5. Added a timer
6. Displayed current questions
7. Set timer to start and show the first question
8. Add questions and the array for choices
9. Added logic for answers being correct and incorrect
10. Added end of quiz functions (timer and end-screen)
11. Set feedback element to 1 sec increment
12. Added function to save initials and score to localstorage
13. Added function to clear highscores
14. Set submit button to direct to highscores page
15. Fixed bugs