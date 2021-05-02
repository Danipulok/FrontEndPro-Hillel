/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-magic-numbers */

function countModOrder(number) {
    const mod = number % 10;
    let order = 0;

    while (number > 9) {
        number = (number - number % 10) / 10;
        order += 1;
    }
    return [mod, order];
}

function reverseNumber(numberToReverse) {
    let resultNumber = 0;

    while(numberToReverse > 0) {
        let mod, order;
        [mod, order] = countModOrder(numberToReverse);
        numberToReverse = (numberToReverse - numberToReverse % 10) / 10;
        resultNumber += (mod * 10 ** order);
    }
    return resultNumber;
}

function makePalindromeFromNumber(number) {
    let steps = 0;

    while(!(number === reverseNumber(number))){
        number += reverseNumber(number);

        if(++steps === 16){
            steps = null;
            number = null;
            break;
        }
    }

    return {
        result: number,
        steps: steps,
    };
}

const res = makePalindromeFromNumber(178);
console.log(res, '\n');
