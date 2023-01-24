// get highscores from localstorage
let highscores = JSON.parse(localStorage.getItem("highscores"));
// sort from high to low
highscores.sort((a, b) => b.score - a.score);
// put into list
let ol = document.querySelector("#highscores");
// add highscores as list items
highscores.forEach(score => {
    let li = document.createElement("li");
    li.textContent = score.initials + ": " + score.score;
    ol.appendChild(li);
  });