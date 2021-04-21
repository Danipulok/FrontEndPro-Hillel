function createTree(rows){
    // дерево-треугольник
    let res = ""

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < rows - 1 - i; j++)
            res += " "
        for (let j = 0; j <= i; j++)
            res += "*"
        res += "\n"
    }
    return res;
}

res = createTree(5)
console.log(res)

//     *
//    **
//   ***
//  ****
// *****
