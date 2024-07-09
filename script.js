// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all choice elements and the message element
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Select the elements that display the scores
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's choice randomly
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function to handle a draw game
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Function to display the winner and update scores
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Function to play the game
const playGame = (userChoice) => {
  // Generate computer's choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Handle a draw game
    drawGame();
  } else {
    // Determine if the user wins
    let userWin = true;
    if (userChoice === "rock") {
      // Rock vs scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Paper vs rock or scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Scissors vs rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    // Display the winner
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to each choice element
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
