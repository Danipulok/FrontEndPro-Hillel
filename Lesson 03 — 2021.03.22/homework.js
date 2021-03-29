// Какие будут результаты выполнения кода и почему, напишите объяснение к каждому примеру.

res = false && true || true         //  => false || true => true
                                    // у && больший приоритет

res =  false && (true || true);     //  => false && true => false
                                    // у скобок больший приоритет

res = '10' + (5 === 6);             //  => '10' + false  => '10false'
                                    // строгое сравнение выдаёт false, дальше строка + фолс = строка

res = '10' - 5 === 6;               //  => 5 === 6       => false
                                    // у "-" больший приоритет, поэтому 5 === 6, а это false

res = (+null == false) < 1;         //  => (0 == false) < 1 => (0 === 0) < 1 => true < 1 => false
                                    // +null преобращует в 0. Дальше вначале действие в скобках, это у нас true,
                                    // потому что нестрогое сравнение типов. Дальше true < 1, выдаёт false

res = (+null == false) < 1 ** 5;    //  => (0 === 0) < 1 => true < 1 => false
                                    // +null преобращует в 0. Дальше вначале действие в скобках, это у нас true,
                                    // дальше действие умножения самого на себя, т.к. больший приоритет, выходит
                                    // true < 1, это у нас false

res = undefined + 5 > null + 1      //  => NaN > 1 => false
                                    // undefined + 5 = NaN, т.к. число плюс undefined, дальше
                                    // null + 1 = 1, т.к. null сводится в 0, дальше NaN > 1, а NaN всегда больше числа


//Вам нужно запросить у пользователя возраст. Добавить условие при котором возраст будет выводиться с правильным словом:
// "год", "года" или "лет". Т.е. "29 лет" или "4 года". Ограничений по возрасту - нет, 0 тоже подходит.

// https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}

function askAge(question = "Your age?"){
    let age = prompt(question, "")
    if (!age)
        askAge("Please input something!")
    if (!isNumeric(age))
        askAge("Please input number!")
    if (!(+age >= 0))
        askAge("Please input 0 or bigger number :D")
    return age;
}

function getAgeFormat(age){
    if (age === 0)
        return "лет";
    if (5 <= age && age <= 20)
        return "лет";
    if ((age % 10) === 1)
        return "год";
    if (2 <= (age % 10) && (age % 10) <= 4)
        return "года";
    return "лет"
}

let age = askAge()
let fmt = getAgeFormat(+age)
let age_info = `${age} ${fmt}`
console.log("Вам " + age_info)
