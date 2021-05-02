// Object example
let user = {
    firstName: "Вася",
    sayHi1: function (...args) {console.log(`Привет, ${this.firstName}! ${args}`)},
    sayHi2: (...args) =>        console.log(`Привет, ${this.firstName}! ${args}`)
};

console.log("\WEKADJLKWAJDLKWAJDKOLAW")
user.sayHi2()

this.firstName = "WADKAJWL"
console.log("\WEKADJLKWAJDLKWAJDKOLAW")
user.sayHi2()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wrapper function example
const FUCKYOUBITCH1 = () => user.sayHi1()
FUCKYOUBITCH1()  // Привет, Вася!

// Wrapper function example - doesn't work because of anonymous function
const FUCKYOUBITCH2 = () => user.sayHi2()
FUCKYOUBITCH2()  // "Привет, undefined!"


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bind - We bind first arg as this and others as usual - (thisToBind, ..args)
const newFuncFromUserNormal = user.sayHi1.bind(user, 1, 2, 3)
console.log("\nHere1")
newFuncFromUserNormal() // Привет, undefined! 1,2,3

// Bind - We bind first arg as this and others as usual - (thisToBind, ..args)
const newFuncFromUserAnon = user.sayHi2.bind(user, 1, 2, 3)
console.log("\nHere2")
newFuncFromUserAnon() // Привет, undefined! 1,2,3


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Usual Func
function funcWithThisUsual(...args) {
    return console.log(`Привет, ${this.firstName}! ${args}`)
}

// Binding and testing usual function
const funcWithThisUsualBinded = funcWithThisUsual.bind(user, 1, 2, 3)
console.log("\nHere 3")
funcWithThisUsualBinded()

// Binding and testing anon function
const funcWithThisAnon = (...args) => console.log(`Привет, ${this.firstName}! ${args}`);
const funcWithThisAnonBinded = funcWithThisAnon.bind(user, 4, 5, 6)
console.log("\nHere 4")
funcWithThisAnonBinded()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\nHere 5")
funcWithThisUsualBinded.apply(user, [4, 5, 6])

console.log("\nHere 6")
funcWithThisAnon.apply(user, [4, 5, 6])
