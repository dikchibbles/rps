const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

let weaponBtns = document.getElementsByClassName("weapon-btn");

let getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

let changeScore = (num) => {
  if (num == 2) {
    computerScore += 1;
    document.getElementsByClassName("computer-score")[0].textContent =
      computerScore;
  } else if (num == 1) {
    playerScore += 1;
    document.getElementsByClassName("player-score")[0].textContent =
      playerScore;
  }
};

let changeScoreText = (text) => {
  document.getElementsByClassName("score-text")[0].textContent = text;
};

let playRound = (playerChoice, computerChoice) => {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return [
            `It's a draw! Nothing happens when you hit rock with rock`,
            0,
          ];
          break;
        case "paper":
          return [`You lose! Computer wraps his paper around your rock`, 2];
          break;
        case "scissors":
          return [
            "You win! The scissors can't handle the good old rock pounding",
            1,
          ];
          break;
      }
    case "paper":
      switch (computerChoice) {
        case "paper":
          return ["It's a draw! Paper plus paper is two papers", 0];
          break;
        case "rock":
          return ["You win! You strangle the rock with your love", 1];
          break;
        case "scissors":
          return ["You lose! Paper hands", 2];
          break;
      }
    case "scissors":
      switch (computerChoice) {
        case "scissors":
          return ["It's a draw! Scissors can't fight each other", 0];
          break;
        case "paper":
          return ["You win! Paper can't handle the sharpness", 1];
          break;
        case "rock":
          return [
            "You lose! The scissors can't handle the good old rock pounding",
            2,
          ];
          break;
      }
  }
};

let checkEndGame = () => {
  if (playerScore >= 3 || computerScore >= 3) {
    for (let i = 0; i < weaponBtns.length; i++) {
      weaponBtns[i].style.display = "none";
    }
  }
};

for (let i = 0; i < weaponBtns.length; i++) {
  weaponBtns[i].addEventListener("click", (event) => {
    let curPlayerWeaponChoice = event.target.textContent.trim().toLowerCase();
    let computerChoice = getComputerChoice();
    let result = playRound(curPlayerWeaponChoice, computerChoice);
    let resultText = result[0];
    let resultScore = result[1];
    changeScore(resultScore);
    changeScoreText(resultText);
    checkEndGame();
  });
}
