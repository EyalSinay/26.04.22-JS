const player1 = document.querySelector('#player1-race');
const keyPlayer1 = 'l';

const player2 = document.querySelector('#player2-race');
const keyPlayer2 = 'a';

const keyReset = 'r';

const getNamePlayer = (player) => {
    let namePlayer = player.getAttribute('id');
    namePlayer = namePlayer.slice(0, 7);
    return namePlayer;
}

const resetGame = () => {
    player1.querySelector('.active').removeAttribute('class');
    player1.firstElementChild.setAttribute('class', 'active');
    player2.querySelector('.active').removeAttribute('class');
    player2.firstElementChild.setAttribute('class', 'active');
}

const playerForward = (player) => {
    const currentActive = player.querySelector('.active');
    const nextActive = currentActive.nextElementSibling;
    if (!nextActive.getAttribute('class', 'finish')) {
        currentActive.removeAttribute('class');
        nextActive.setAttribute('class', 'active');
    } else {
        const isConfirm = confirm(`${getNamePlayer(player)} is the winner!\nDid you wont another round?`);
        isConfirm ? resetGame() : alert('By!');
    }
}

document.addEventListener('keyup', (e) => {
    const key = e.key;

    if (key === keyPlayer1) {
        playerForward(player1);
    } else if (key === keyPlayer2) {
        playerForward(player2);
    } else if (key === keyReset) {
        resetGame();
    }
});