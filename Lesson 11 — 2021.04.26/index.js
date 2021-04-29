/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
// Разобраться с правилами привязки this
// Написали свою реализацию метода bind :)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Example object
const small = {
    a: 1,
    go: function (b, c, d) {
        console.log('this.a: ' + this.a + '; b: ' + b + '; c: ' + c + '; d:' + d);
        console.log(this.a + b + c + d);
    }
};


// Standard bind
console.log('[Standard bind]');
const bindTest = small.go.bind({ a: 500 }, 5);
bindTest(2, 3);


// My option
function myBind(target, boundThis, ...args) {
    return function newFunc(...addArgs) {
        return target.call(boundThis, ...args, ...addArgs);
    };
}


// MyBind
console.log('\n[Custom bind]');
const myBindTest = myBind(small.go, { a: 500 }, 5);
myBindTest(2, 3);
