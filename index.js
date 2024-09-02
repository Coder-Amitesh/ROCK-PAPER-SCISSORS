const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function playGame(playerMove) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';

    if (playerMove === computerMove) {
        result = "It's a tie!";
        score.ties += 1;
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        score.wins += 1;
    } else {
        result = 'Computer wins!';
        score.losses += 1;
    }

    showModal('Computer chose: ' + computerMove + '<br>' + result +
              '<br><br><strong>Score:</strong>' +
              '<br>Wins: ' + score.wins +
              '<br>Losses: ' + score.losses +
              '<br>Ties: ' + score.ties);
}

function showModal(message) {
    document.getElementById('modalMessage').innerHTML = message;
    document.getElementById('resultModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
