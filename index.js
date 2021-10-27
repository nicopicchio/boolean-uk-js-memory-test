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

const numberOne = Math.floor((Math.random() * 100) + 1);
const numnberTwo = Math.floor((Math.random() * 100) + 1);
const numberThree = Math.floor((Math.random() * 100) + 1);
const numberFour = Math.floor((Math.random() * 100) + 1);
const randomNumberArray = []
randomNumberArray.push(numberOne);
randomNumberArray.push(numnberTwo);
randomNumberArray.push(numberThree);
randomNumberArray.push(numberFour);
alert(randomNumberArray.join('\n\n'));


const numberRememberedOne = prompt(`Please enter the first number`);
const numberRememberedTwo = prompt(`Please enter the second number`);
const numberRememberedThree = prompt(`Please enter the third number`);
const numberRememberedFour = prompt(`Please enter the fourth number`);
const numberRememberedArray = [];
numberRememberedArray.push(numberRememberedOne);
numberRememberedArray.push(numberRememberedTwo);
numberRememberedArray.push(numberRememberedThree);
numberRememberedArray.push(numberRememberedFour);
numberRememberedArray.join('\n\n');

let count = 0;

for (let i = 0; i < numberRememberedArray.length; i++) {
    const numbersToString = randomNumberArray[i].toString();
    if (numberRememberedArray[i] === numbersToString) {
        count++;
    }
}

function resultMessage(){
    alert(`You rememberd ${count} numbers out of ${randomNumberArray.length}!`);
}

resultMessage();