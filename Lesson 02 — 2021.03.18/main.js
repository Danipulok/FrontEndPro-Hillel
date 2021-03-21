// 1. Создайте переменные со след данными:
//     Ваше имя и фамилия.
//     Сколько вам лет (можно произвольно).
// Какое-то сообщение с приветствием.
// 2. Создайте переменную для предложения, которое должно содержать все данные (т.е. соберите все данную в одну строку).
//
// 3. Выведите его в консоль.

firstName = "Daniil"
lastName  = "Bykov"
age = 18


function greet(firstName = "Vasya", lastName = "Pupkin", age = 18) {
    return `Hi, sweetie. Nice to meet you, ${firstName} ${lastName}.\n` +
           `I'm glad you're ${age}, it means we're actually pretty peers :D.`
}

res = greet(firstName, lastName, age)
console.log(res)


// +'40' + +'2';       = 42,   т.к. "+" преващает в числа
// '2' + 3 ** 2;       = '29', т.к. ("2" + 9) = "29"
// 3 ** 2 / 3;         = 3,    т.к. приоритеты
// 3 ** (9 / 3);       = 27,   т.к. приоритеты
// undefined + 1;      = NaN,  т.к. Не число и вообще капец
// +null + 10;         = 10,   т.к. (0 + 10)
// null / 5;           = 0,    т.к. понятия не имею. По идее (0 / 5)
// 'hello' + null;     = 'hellonull', т.к. строка + что-либо
// 'hello' - undefined + NaN,  т.к. javascript
// '30' + 3 - '3';     = 3033, т.к. ('303' - '3')
// 10 % '5';           = 0,    т.к. '%'

let number;
number = 5;
res = 2 * ++number;  // 12 = 2 * (1 + 5)
console.log("Res 1: " + res);

number = 5;
res = 2 * number--;  // 10 = 2 * 5 - 1
                     // И по сути тут пропадает ( - 1), так как `number--` умножается на 2 до уменьшения на еденицу
console.log("Res 2: " + res);
