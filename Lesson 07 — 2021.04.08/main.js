// Реализуйте функции:
//
// getResultAll(operation, a, b, c, n...)
//
// Функция может принять любое количество аргументов.
// Первый всегда математическое действие +, -, *, / - все последующие числа.
// Внутри ф-ии проверять является ли аргумент числом и если да, то выполнять математическое действие.
// И так с каждым аргументом. Вернуть ф-ия должна результат всех операций.
//
// Например: getResult('+', 5, 6, 10) -> 21, а getResult('*', 2, 5, 30) -> 300.

// reverseString(string)
//
// Принимает строку и возвращает новую строку, но перевернутую в обратном порядке
// Например: reverseString('hello') -> olleh

// isCharPresent(string, char)
// Она принимает 2 аргумента - строку и символ и узнает содержится ли символ в строке, возвращает true / false
// charIndexOf(string, char)
// Принимает такие же аргументы, но возвращает индекс или -1, если символа нет.

// Как вы понимаете, пользоваться методами от Math, includes, indexOf и другими - нельзя, только циклы и функции только хардкор)

function getResultAll(operation){

    if (!(["+", "-", "*", "/"].includes(operation))) {
        throw "You passed unacceptable `operation` argument. Only `+, -, *, /` are acceptable.";
    }

    for (let i = 1; i < arguments.length; i++){
        if(!(typeof +arguments[i] === "number" && !isNaN(+arguments[i])))
            throw "You passed wrong type of arguments. Only `numbers` and numbers as `string` are acceptable.";
    }

    // Return 0 in case there are no arguments but `operation`.
    if(!(arguments.length >= 2))
        return 0

    // Assign `res` for the first passed argument.
    let res = arguments[1];

    // First option
    // for (let i = 2; i < arguments.length; i++){
    //     res = eval(`${res} ${operation} ${arguments[i]}`)
    // }

    // Second option - when second check is unnecessary.
    for (let i = 2; i < arguments.length; i++){
        if(!(typeof +arguments[i] === "number" && !isNaN(+arguments[i]))) continue;

        if(operation === "+") res += +arguments[i];
        else if(operation === "-") res -= +arguments[i];
        else if(operation === "*") res *= +arguments[i];
        else if(operation === "/") res /= +arguments[i];
    }

    return res;
}

console.log("[getResultAll]")
let res = getResultAll("+", 5, 6, 10)  // 21
console.log(res)

// res = getResultAll("-", 1, 2, "sudo rm -rf /")
res = getResultAll("*", 2, "5", 30)  // 300
console.log(res)


function reverseString(string){

    if(!(typeof string === "string")) {
        throw "No."
    }

    let res = ""
    for (let j = string.length -1; j >= 0; j--) {
        res += string[j];
    }

    return res
}

console.log("\n[reverseString]")
res = reverseString("hello")  // olleh
console.log(res)


function isCharPresent(string, char){
    if(!(typeof string === "string" && typeof char === "string")){
        throw "Wrong types"
    }

    if(!(char.length === 1)){
        throw "Char must be one character"
    }

    let isPresent = false
    for(let i = 0; i < string.length; i++){
        if(string[i] === char) {
            isPresent = true;
            break;
        }
    }

    return isPresent
}

console.log("\n[isCharPresent]")
res = isCharPresent("hello", "h")  // true
console.log(res)

res = isCharPresent("hello", "!")  // false
console.log(res)


function charIndexOf(string, char){
    if(!(typeof string === "string" && typeof char === "string")){
        throw "Wrong types"
    }

    if(!(char.length === 1)){
        throw "Char must be one character"
    }

    let charIndex = -1
    for(let i = 0; i < string.length; i++){
        if(string[i] === char) {
            charIndex = i;
            break;
        }
    }

    return charIndex
}

console.log("\n[charIndexOf]")
res = charIndexOf("hello", "h")  // 0
console.log(res)

res = charIndexOf("hello", "!")  // -1
console.log(res)
