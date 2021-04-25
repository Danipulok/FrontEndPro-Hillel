// Напишите функции, которые:
//
// cloneObj(obj) // вернет копию объекта
// getValues(obj, separator) // вернет строку, в кототорой каждое значение перечислено через разделитель
// getKeys(obj, separator) // вернет строку, в кототорой каждый ключ перечислен через разделитель
// getEntries(obj) // вернет строку, в кототорой каждая пара ключ: значение указаны с новой строки
//
// obj - это объект, с которым будет работать ф-ия
// separator - символ, который будет использоваться в качестве разделителя

function test() {

    let oldObj = {
        "Height": 187,
        "Weight": 72,
        "Age": 18
    }

    let newObj = cloneObj(oldObj)
    console.log(newObj, "\n")

    let values = getValues(newObj, " | ")
    console.log(values, "\n")

    let keys = getKeys(newObj, " | ")
    console.log(keys, "\n")

    let entities = getEntries(newObj)
    console.log(entities, "\n")
}


test()

/**
 * Function to clone object.
 *
 * @param {object} obj - object to clone.
 * @returns {object} cloned object.
 */
function cloneObj(obj) {
    let newObj = {}

    for (const [key, value] of Object.entries(obj)) {
        newObj[key] = value
    }

    return newObj
}

/**
 * Function to return object values joined by passed separator.
 *
 * @param {object} obj - object, which values to be returned.
 * @param {string} separator - separator.
 * @returns {string} values joined by separator.
 */
function getValues(obj, separator=", ") {
    let values = Object.values(obj)
    return values.join(separator)
}

/**
 * Function to return object keys joined by passed separator.
 *
 * @param {object} obj - object, which keys to be returned.
 * @param {string} separator - separator.
 * @returns {string} keys joined by separator.
 */
function getKeys(obj, separator=", ") {
    let values = Object.keys(obj)
    return values.join(separator)
}

/**
 * Function to get object entities as string.
 *
 * @param {object} obj - object which entities to be parsed.
 * @returns {string} entities as string.
 */
function getEntries(obj) {
    let sets = []

    for (const [key, value] of Object.entries(obj)) {
        sets.push(`${key} : ${value}`)
    }

    return sets.join("\n")
}
