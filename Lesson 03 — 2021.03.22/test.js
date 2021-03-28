function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}

arr = ["", " ", "4", "456454", "456,456", "12.123", "null", "undefined", "0", "-5"]
for (let i = 0; i < arr.length; i++) {
    console.log(
        '{' + arr[i] + '}',
        isNumeric(arr[i]))
}
