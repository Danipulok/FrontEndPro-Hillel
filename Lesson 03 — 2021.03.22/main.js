// Какие будут результаты выполнения кода и почему, напишите объяснение к каждому примеру.

res = false && true || true         //  => false || true => true
res =  false && (true || true);     //  => false && true => false
res = '10' + (5 === 6);             //  => '10' + false  => '10false'
res = '10' - 5 === 6;               //  => 5 === 6       => false
res = (+null == false) < 1;         //  => (0 == false) < 1 => (0 === 0) < 1 => true < 1 => false
res = (+null == false) < 1 ** 5;    //  => (0 === 0) < 1 => true < 1 => false
res = undefined + 5 > null + 1      //  => NaN > 1 => false

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
document.getElementById("age").innerHTML = age.toString();
document.getElementById("age_word").innerHTML = age_info;
