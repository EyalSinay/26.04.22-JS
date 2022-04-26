const arrLettersGuesses = [];

const arrAllLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const letter = arrAllLetters[Math.floor(Math.random() * arrAllLetters.length)];

const note = document.querySelector('#note');
const key = document.querySelector('#key');

document.addEventListener('keypress', (e) => {
    const userGuess = e.key;

    if(userGuess === letter){
        alert('Yeah!!!!');
    } else if (arrLettersGuesses.includes(userGuess)) {
        note.innerText = 'This letter is already exists';
    } else {
        arrLettersGuesses.push(userGuess);
        note.innerText = 'Nope!';
        key.innerText = arrLettersGuesses;
    }
});