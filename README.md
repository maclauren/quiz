# quiz
A timed, multiple-choice coding quiz that can keep track of high scores and quiz-takers' initials.

1. Added comments to mark up HTML file
2. 

Set text content of an element with the id "question-title" to the question property of the object in the questions array at the index of "questionIndex".

It then creates a variable named "choices" that gets the element with the id "choices".

It enters a while loop that removes any child elements from the choices element as long as the number of children is greater than 0.

It then enters a for loop that iterates through the choices array of the object in the questions array at the index of "questionIndex".

Inside the for loop, it creates a button element, sets its text content to the current choice in the choices array, and adds an event listener that listens for a "click" event.

When the button is clicked, it sets the userChoice property of the object in the questions array at the index of "questionIndex" to the current choice index.

Then it increments the questionIndex by 1, if questionIndex is greater than the length of the questions array minus 1, it calls the function "displayScore", otherwise it calls the function "displayQuestion" with the incremented questionIndex.

Finally, it appends the button element to the choices element.