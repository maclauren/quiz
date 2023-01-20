// pull question titles
const questionTitle = document.getElementById("question-title");

//pull choices
const choices = document.getElementById("choices");

// pull questions
const questions = document.getElementById("questions");

// add question titles
questionTitle.innerText = "Which of these is the odd one out?";

// add choices array
const choiceArray = ["var", "let", "const", "for"];

// loop for array
for (let i = 0; i < choiceArray.length; i++) {
  const choice = document.createElement("li");
  choice.innerText = choiceArray[i];
  choices.appendChild(choice);
}

