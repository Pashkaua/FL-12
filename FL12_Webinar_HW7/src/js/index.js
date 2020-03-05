import '../scss/style.scss';
import startGame from './start';

const game = () => {
  let pScore = 0;
  let cScore = 0;
  let round = 1;
  const three = 3;
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', e => {
        e.target.style.animation = '';
      });
    });

    //Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * three);
        const computerChoice = computerOptions[computerNumber];
        const time = 2000;
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, time);
        //Animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    if (round > three) {
      const winner = document.querySelector('.winner');
      winner.textContent = `Result, 
             you: ${pScore}, computer: ${cScore}, 
             Play again ?`;
      const option = document.querySelector('.options');
      const playAgain = document.querySelector('.play-again');
      option.classList.add('fadeOut');
      playAgain.classList.remove('hidden');
      playAgain.addEventListener('click', () => {
        option.classList.remove('fadeOut');
        playAgain.classList.add('hidden');

        const winner = document.querySelector('.winner');
        winner.textContent = `Choose an option`;

        pScore = 0;
        cScore = 0;
        round = 1;
        updateScore();
      });
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector('.winner');
    //Checking for a draw
    if (playerChoice === computerChoice) {
      winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice}, it is a draw`;
      round++;
      updateScore(cScore, pScore, round);
      return;
    }
    //Check for Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice},  You’ve WON !`;
        pScore++;
        round++;
        updateScore(cScore, pScore, round);
        return;
      } else {
        winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice},  You’ve LOST !`;
        cScore++;
        round++;
        updateScore(cScore, pScore, round);
        return;
      }
    }
    //Check for Paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice},  You’ve LOST !`;
        cScore++;
        round++;
        updateScore(cScore, pScore, round);
        return;
      } else {
        winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice},  You’ve WON !`;
        pScore++;
        round++;
        updateScore(cScore, pScore, round);
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice},  You’ve LOST !`;
        cScore++;
        round++;
        updateScore(cScore, pScore, round);
        return;
      } else {
        winner.textContent = `Round ${round}, ${playerChoice} vs ${computerChoice},  You’ve WON !`;
        pScore++;
        round++;
        updateScore(cScore, pScore, round);
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
