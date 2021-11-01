function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const gameMode = Number(prompt('How many numbers do you think you can remember?'));

const getRandomNumberArray = []
for (let i = 0; i < gameMode; i++) {
    getRandomNumberArray.push(getRandomNumber(100));
}

alert(`These are your random numbers:\n${getRandomNumberArray.join('\n')}`);

function checkUserNumbers() {
    let count = 0;
    for (let i = 0; i < gameMode; i++) {
        const userNumber = Number(prompt(`Enter number ${i + 1}`));
        if (getRandomNumberArray[i] === userNumber) {
            count ++;
        }
    }
    alert(`You guessed ${count} numbers out of ${getRandomNumberArray.length}`);
}

setTimeout(checkUserNumbers, 5000);