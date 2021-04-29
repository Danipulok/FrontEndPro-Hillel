/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
// Вам нужно, написать функцию, которая принимает 1 параметр.
// При первом вызове, она его запоминает, при втором — суммирует переданый параметр с тем, что передали первый раз и тд.
// Всё это с замыканиями, например:
//   sum(3) = 3
//   sum(5) = 8
//   sum(20) = 28
//
// Это не все.
// Возьмите счетчик, который мы писали в классе и добавьте ему возможность задавать начальное значение и шаг счетчика
// при инициализации и метод для сброса к начальному значению. Помните, что функция - это объект)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createSum() {
    let counter = 0;
    return function innerFunc (number) {
        return counter += number;
    };
}

const sum = createSum();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createCounter(initVal = 0, stepVal = 1) {
    let firstTime = true;
    let counter = initVal;
    return function (restartVal = false) {
        if(restartVal) {
            counter = initVal;
            firstTime = false;
            return counter;
        }
        if(firstTime) {
            firstTime = false;
            return counter;
        }
        return counter += stepVal;
    };
}

const fbLikes = createCounter(1, 2);

console.log('fblikes: ', fbLikes()); // 1
console.log('fblikes: ', fbLikes()); // 2
console.log('fblikes: ', fbLikes()); // 3

console.log('fblikes: ', fbLikes(true)); // 1
console.log('fblikes: ', fbLikes()); // 1
console.log('fblikes: ', fbLikes()); // 3
console.log('fblikes: ', fbLikes()); // 4
