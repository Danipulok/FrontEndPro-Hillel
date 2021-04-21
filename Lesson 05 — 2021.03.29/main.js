// Вам нужно написать реализацию функции padString. Функция принимает строку, число, которое является длинной строки,
// которую мы хотим получить в результате, символ, которым дополнится строка, если это будет необходимо и "флаг",
// добавлять символы слева или справа(по-умолчанию).

// padString(target, char, length, fromStart);
// padString('hello', '*', 10, true); // '*****hello'
// padString('hello', '*', 10, false); // 'hello*****'
// padString('hello', '*', 3); // 'hello'
// padString('world', '*', 5); // 'world'


/**
 * Function to pad a string.
 *
 * @param {string} target - String to get padded.
 * @param {string} char   - Char to be added.
 * @param {number} length - Targeted length. If less then passed string, the input string returned.
 * @param {boolean} fromStart - Add chars from the beginning of the string or from end.
 */
function padString(target, char, length, fromStart=false) {
    if (target.length >= length)
        return target;

    let addString = "";
    for (let i = 0; i <= length - target.length; i++)
        addString += char;

    if (fromStart)
        return addString + target;
    return target + addString;
}


function main(){
    let res1 = padString('hello', '*', 10, true); // '*****hello'
    let res2 = padString('hello', '*', 10, false); // 'hello*****'
    let res3 = padString('hello', '*', 3); // 'hello'
    let res4 = padString('world', '*', 5); // 'world'

    // https://stackoverflow.com/questions/31353213/does-javascript-support-array-list-comprehensions-like-python
    let answers = [res1, res2, res3, res4];
    for (let answer of answers)
        console.log(answer)
}


// https://stackoverflow.com/questions/4981891/node-js-equivalent-of-pythons-if-name-main
if (typeof require !== 'undefined' && require.main === module) {
    main();
}

main()
