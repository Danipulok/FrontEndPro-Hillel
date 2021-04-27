// 1. Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// У вас есть массив строк:
//      var stringsInCebab = ['border-top-left-width', 'font-size', 'background-color']

// Используя свою ф-ию camelize преобразуйте каждый элемент такого массива из cebab-case в camelCase.
// В результате должно получиться:
//      var stringsInCamel = ['borderTopLeftWidth', 'fontSize', 'backgroundColor'];

// Для решения этого задания можно использовать методы массива для решения.

// 2. Напишите свою реализацию методов map и filter.
// Это должна быть ф-ия, которая принимает массив и колбэк, а в результате отрабатывают как соотв. методы.

//  А в этом нет)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// camelize && camelizeArray
function camelize(str){
    let resStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === "-") {
            resStr += str[++i].toUpperCase();
        }
        else {
            resStr += str[i];
        }
    }

    return resStr;
}

function camelizeArray(array){
    let resArray = []
    for(let i = 0; i < array.length; i++) {
        resArray[i] = camelize(array[i])
    }
    return resArray
}

// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log("[camelize]")
let stringsInCebab = ['border-top-left-width', 'font-size', 'background-color']
let stringsInCamel = camelizeArray(stringsInCebab)
console.log("Old " + stringsInCebab)
console.log("new " + stringsInCamel)

isEqual = arraysEqual(stringsInCamel, ['borderTopLeftWidth', 'fontSize', 'backgroundColor'])
isArray = Array.isArray(stringsInCamel)
console.log(`Equals expected result: ${isEqual}; \nIs array: ${isArray}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// myMap
function myMap(array, callback){
    let resArray = [];
    for(let i = 0; i < array.length; i++) {
        resArray[i] = callback(array[i])
    }
    return resArray
}

function sqrt(number){
    return number*number
}

console.log("\n[myMap]")
let numbers = [1, 4, 9];

// Передавая обычную фукнцию
// let roots = myMap(numbers, sqrt)

// Используя лямбда-функцию
let roots = myMap(numbers, el => el * el)

console.log(`Old: ${numbers}`)
console.log(`New: ${roots}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// myFiler
function myFiler(array, callback){
    let resArray = [];
    for(let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            resArray[resArray.length] = array[i]
        }
    }
    return resArray;
}

console.log("\n[myFiler]")
let numbers_old = [1, 4, 9, "sudo rm -rf /", "Hi here", [1, 2, 3], "456", "this is a number"];

// Передавая обычную фукнцию
// let numbers_filtered = myFiler(numbers_old, isNumeric)

// Используя лямбда-функцию
let numbers_filtered = myFiler(numbers_old, str => {return typeof +str === "number" && !isNaN(+str)})

console.log(`Old: ${numbers_old}`)
console.log(`New: ${numbers_filtered}`)
