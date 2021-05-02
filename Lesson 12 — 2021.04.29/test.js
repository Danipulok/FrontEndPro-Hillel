function makePalindromeFromNumber(number) {

    // В результате я хочу, чтоб вы написали функцию, которая будет возвращать объект где будет свойство
    // result - и это будет палиндром и свойство steps - это число вызовов до нахождения палиндрома

    let tooBig = false;
    let steps = 0;

    while(!(number === reverseNumber(number)) && (!(tooBig))){
        number += reverseNumber(number);
        if(++steps === 16){
            tooBig = true;
        }
    }

    function reverseNumber(numberToReverse) {
        let resultNumber = 0;

        function countModOrder(number) {
            let mod = number % 10;
            let order = 0;

            while (number > 9) {
                // number /= 10
                // number = parseInt(number);
                // https://ru.stackoverflow.com/questions/582163/
                number = (number - number % 10) / 10
                order += 1;
            }
            return [mod, order]
        }

        while(numberToReverse > 0) {
            [mod, order] = countModOrder(numberToReverse);
            // numberToReverse /= 10;
            // numberToReverse = parseInt(numberToReverse);
            numberToReverse = (numberToReverse - numberToReverse % 10) / 10
            resultNumber += (mod * 10 ** order);
        }
        return resultNumber;
    }

    if(tooBig){
        number = null;
        steps = null;
    }

    return {
        result: number,
        steps: steps,
    }

}


let res = makePalindromeFromNumber(178)
console.log(res, "\n")
