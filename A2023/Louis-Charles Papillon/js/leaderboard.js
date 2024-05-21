function sauvegarderScore(scoreFinal) {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.push(scoreFinal);

    scores.sort((a, b) => b - a);

    scores - scores.slice(0, 5);

    localStorage.setItem("scores", JSON.stringify(scores));
}

function afficherScores() {
    const scores = JSON.parse(localStorage.getItem("scores")) || [];

    const scoresElement = document.querySelector("#leaderboard");

    for (let index = 0; index < scores.length; index++) {
        const listItem = document.createElement("li");
        const scoreText = "#" + (index + 1) + ": " + scores[index];
        listItem.textContent = scoreText;
        scoresElement.innerHTML += listItem.outerHTML;
    }
}