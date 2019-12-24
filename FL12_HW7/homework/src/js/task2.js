'use strict';
let start = confirm('Do you want to play a game?');

let maxNum = 8;
let atempts = 3;
let prize = 0;
let maxPrize = 100;

const two = 2;
const four = 4;
const three = 3;
const eight = 8;
const hundred = 100;

if (start) {

    while (atempts > 0) {
        let rand = Math.round(Math.random() * maxNum);
        let ask = parseInt(prompt(`Enter a number from 0 to ${maxNum}
    Attempts left: ${atempts}
    Total prize: ${prize}$
    Possible prize on current attempt: ${maxPrize}$
    
    `, ''));

        if (rand === ask) {
            prize += maxPrize;
            maxPrize *= two;
            maxNum += four;

            let askNext = confirm(`Congratulation, you won!   Your prize is: ${prize} $. 
            Do you want to continue?’.`);
            if (askNext) {
                continue;
            } else {
                break;
            }

        } else {
            atempts--;
            maxPrize /= two;
        }

        if (atempts === 0) {

            alert(`Thank you for your participation. Your prize is: ${prize} $`);
            let anotherAsk = confirm('Do you wat to play again ?');
            if (anotherAsk) {
                prize = 0;
                maxNum = eight;
                atempts = three;
                maxPrize = hundred;
                continue;
            } else {
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}