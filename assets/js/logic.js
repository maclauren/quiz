// GIVEN I am taking a code quiz

// WHEN I click the start button
// create var for start button
// set up event listener for start button
// when button is pressed, start the quiz
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", startQuiz);

// THEN a timer starts and I am presented with a question
// declare let for timer (60 secs), current question (set 0 for question 1) and interval (undefined for now)
let timeRemaining = 60;
let currentQuestion = 0;
let timerInterval;
// start and set interval
function startTimer(){
    timerInterval = setInterval(function(){
        timeRemaining--;
// check if time remaining is less than 0
// fix as in test, clicking wrong answers could yield a negative integer that did not end the quiz at 0
        if(timeRemaining < 0){
            timeRemaining = 0;
        }
// display value of 'time' in html
        document.querySelector("#time").textContent = timeRemaining;
// if time remaining is 0, end the quiz
        if(timeRemaining === 0){
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// start quiz - show start screen, show questions, start timer and present first question
function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    startTimer();
    presentQuestion();
  }

// WHEN I answer a question
// THEN I am presented with another question
// get questions list and display value of current question. use a loop to get choices. display text and add buttons, with event listeners for clicks. finally, append new elements so user can click/select answer with new button elements
function presentQuestion() {
    let question = questions[currentQuestion];
    document.querySelector("#question-title").textContent = question.title;
    let choices = document.querySelector("#choices");
    choices.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
        let choice = question.choices[i];
        let button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", selectAnswer);
        choices.appendChild(button);
    }
}

// selectAnswer function
// set answer/choice event parameter, set user choice to the userChoice text, set correct answer to value in the current question, add function to check the answer is correct, add text/string to let user know they are 'correct', then increment score by 10 and increment current question, do the same for incorrect but reduce time by 10secs
// correction to set score variable to 0
let currentScore = 0;
function selectAnswer(event) {
    let userChoice = event.target.textContent;
    let correctAnswer = questions[currentQuestion].answer;
    if (userChoice === correctAnswer) {
      displayFeedback("Correct!");
      currentScore += 10;
      currentQuestion++
// WHEN I answer a question incorrectly
    } else {
      displayFeedback("Incorrect!");
// THEN time is subtracted from the clock
      timeRemaining -= 10;
    }
// WHEN all the questions are answered (or the timer reaches 0, written at line 21 in the timer function)
// THEN the game is over
    if (currentQuestion === questions.length) {
      endQuiz();
    } else {
      presentQuestion();
    }
  }

// WHEN the game is over
// endQuiz function, clear the timer, hide questions and show end-screen, show final score value
function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.querySelector("#final-score").textContent = currentScore;
  }

// displayFeedback function
// select feedback element, remove hide, set timeout to 1 second and add hide again
// correct to 1000 milliseconds
  function displayFeedback(feedback) {
    let feedbackEl = document.querySelector("#feedback");
    feedbackEl.textContent = feedback;
    feedbackEl.classList.remove("hide");
    setTimeout(() => {
      feedbackEl.classList.add("hide");
    }, 1000);
  }

// THEN I can save my initials and score
// add save function, create initials variable from html, create highscores variable (will need to use localstorage and parse JSON data)
// need to correct score variable, has to show initials and scorevalue
// add event listener to submit to save the score and stop submit default
// corrected so score was declared before called
// corrected so highscores is set earlier and uses an empty array
// corrected to use 'currentScore'
// moved submit higher up

// highscores empty array
// let currentScore = 0;
if(!localStorage.getItem("highscores")){
    localStorage.setItem("highscores", "[]");
}
// submit click
document.querySelector("#submit").addEventListener("click", 
function(event) {
    event.preventDefault();
    saveScore();
    location.href = "highscores.html";
  });
// function to saveScore that takes initials value submitted and creates an object containing initials and finalscore (value of 'scorevalue)
function saveScore() {
    let initials = document.querySelector("#initials").value;
    let score = {
        initials: initials,
        score: currentScore
      };
// retrieve current highscores values from localstorage and parse as JSON and add new highscore
      let highscores = JSON.parse(localStorage.getItem("highscores"));
      highscores.push(score);
// and then stringify highscores so back to text
      localStorage.setItem("highscores", JSON.stringify(highscores));
}