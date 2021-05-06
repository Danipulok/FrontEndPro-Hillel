/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-magic-numbers */
// Поработаем с числовым палиндромом)
// Числовой палиндром — это натуральное число, которое читается слева направо и справа налево одинаково.
// Иначе говоря, отличается симметрией записи (расположения цифр), причём число знаков может быть как чётным,
// так и нечётным.
//
// Но
//
// Палиндром можно получить как результат операций над другими числами.
// Возьмём любое натуральное число и сложим его с обращённым числом, то есть записанным теми же цифрами, но в
// обратном порядке.
// Проделаем то же действие с получившейся суммой и будем повторять его до тех пор, пока не образуется палиндром.
// Иногда достаточно сделать всего один шаг (например, 312 + 213 = 525), но, как правило, требуется не менее двух.
// Скажем, число 96 порождает палиндром 4884 только на четвёртом шаге....
//
// В результате я хочу, чтоб вы написали функцию, которая будет возвращать объект где будет свойство
// result - и это будет палиндром и свойство steps - это число вызовов до нахождения палиндрома

// 96 + 69 = 165
// 165 + 561 = 726
// 726 + 627 = 1353
// 1353 + 3531 = 4884


function makePalindromeFromNumber(number, steps=0) {

    const stepsLimit = 100;

    function countModOrder(numberModOrder) {
        const mod = numberModOrder % 10;
        let order = 0;

        while (numberModOrder > 9) {
            numberModOrder = (numberModOrder - numberModOrder % 10) / 10;
            order += 1;
        }
        return [mod, order];
    }

    function reverseNumber(numberToReverse) {
        let resultNumber = 0;
        while (numberToReverse > 0) {
            [mod, order] = countModOrder(numberToReverse);
            numberToReverse = (numberToReverse - numberToReverse % 10) / 10;
            resultNumber += (mod * 10 ** order);
        }
        return resultNumber;
    }

    if (++steps === stepsLimit) {
        return {
            result: null,
            steps: null,
        };
    } else if (number === reverseNumber(number)) {
        return {
            result: number,
            steps: steps,
        };
    } else {
        number += reverseNumber(number);
        return makePalindromeFromNumber(number, steps);
    }

}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// https://www.reddit.com/r/learnprogramming/comments/638bv6/is_there_list_comprehension_in_javascript/
const numbers = Array.from({ length: 15 }, (_, i) => (getRandomInt(1, 1000)));

numbers.forEach((number) => {
    const palindrome = makePalindromeFromNumber(number);
    console.log(`${number}: [steps: ${palindrome.steps}; result: ${palindrome.result}]`);
});