const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

const history = [];

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
    let emoji = '';
    let backgroundColor = '';

    if (playerMove === computerMove) {
        result = "It's a tie!";
        score.ties += 1;
        emoji = '🤝';
        backgroundColor = '#a3c2a2'; 
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        score.wins += 1;
        emoji = '🎉';
        backgroundColor = '#721c24'; 
    } else {
        result = 'Computer wins!';
        score.losses += 1;
        emoji = '😢';
        backgroundColor = '#f8d7da'; 
    }

    updateScoreboard();
    showResult(result, emoji, backgroundColor, playerMove, computerMove);
}

function updateScoreboard() {
    document.getElementById('wins').innerText = score.wins;
    document.getElementById('losses').innerText = score.losses;
    document.getElementById('ties').innerText = score.ties;
}

function showResult(result, emoji, backgroundColor, playerMove, computerMove) {
    document.getElementById('resultMessage').innerText = result;
    document.getElementById('emoji').innerText = emoji;
    document.body.style.backgroundColor = backgroundColor; 

    const modal = document.getElementById('resultModal');
    document.getElementById('modalMessage').innerHTML = `
        You chose: ${playerMove}<br>
        Computer chose: ${computerMove}<br>
        ${result}<br><br>
        <strong>Score:</strong><br>
        Wins: ${score.wins}<br>
        Losses: ${score.losses}<br>
        Ties: ${score.ties}
    `;

    modal.style.display = 'block'; 
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none'; 
}

function addToHistory(result, computerMove) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.innerText = `Computer chose: ${computerMove} - ${result}`;
    historyList.insertBefore(listItem, historyList.firstChild);
}
