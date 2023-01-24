// get highscores from localstorage
let highscores = JSON.parse(localStorage.getItem("highscores"));
// sort from high to low
highscores.sort((a, b) => b.score - a.score);
// put into list
let ol = document.querySelector("#highscores");
// add highscores as list items
// attempted fix for undefined issue
if (highscores !== null && highscores !== undefined) {
highscores.forEach(score => {
    let li = document.createElement("li");
    li.textContent = score.initials + ": " + score.score;
    ol.appendChild(li);
  });
}

// clear highscores

//clear button
let clearBtn = document.querySelector("#clear");
// clear button event listener
clearBtn.addEventListener("click", clearHighscores);
// function for 'clearHighscores'
function clearHighscores() {
// clear localstorage
    localStorage.removeItem("highscores");
// clear list on page
    let ol = document.querySelector("#highscores");
    ol.innerHTML = "";
}