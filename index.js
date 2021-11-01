/*
Memory test 

Description
Test the user's memory with this simple game. This will put your new found skills to the test!

Instructions
- Show the user 4 random numbers between 1 and 100 using an alert
- Ask them to enter the numbers in the right order using a prompt
    - Delay the prompt by 15 seconds (so they have time to forget)
- Check how many numbers they entered correctly
- Show the user their result

Challenge 1
Turn your whole program into a function that will allow you to change the number of numbers displayed and asked for by just entering the desired number as an argument when calling the function
For example:

playMemoryTest(4) should show and ask for 4 numbers

playMemoryTest(10) should show and ask for 10 numbers

And so on...

Challenge 2
When asking the user for the numbers, add ordinality to each number you ask. i.e.:
- Enter the 1st number
- Enter the 2nd number
Etc...

Enjoy!
*/

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
}

const randomNumberArray = []
for (let i = 0; i < 4; i++) {
    randomNumberArray.push(getRandomNumber(100));
}

alert(`These are your random numbers: ${randomNumberArray.join('\n')}`);


const numberRememberedArray = [];
for (let i = 0; i < 4; i++) {
    const numberRemembered = Number(prompt(`Please enter the numbers in the order they appeared`))
    numberRememberedArray.push(numberRemembered);
}

let count = 0;

for (let i = 0; i < numberRememberedArray.length; i++) {
    if (Number(numberRememberedArray[i]) === randomNumberArray[i]) {
        count++;
    }
}

function resultMessage(){
    alert(`You rememberd ${count} numbers out of ${randomNumberArray.length}!`);
}

resultMessage();