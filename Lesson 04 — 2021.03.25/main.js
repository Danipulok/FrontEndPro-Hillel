function createTree(rows){
    let res = ""

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - 1 - i; j++)
            res += " "
        for (let j = 0; j <= i; j++)
            res += "*"
        for (let j = 0; j < i; j++)
            res += "*"
        res += "\n"
    }
    return res;
}


rows = +prompt("How many rows?", "3")
tree = createTree(rows)
console.log(tree)

parent = document.getElementById("tree")
parent.innerHTML = ""

children = tree.split("\n")
for (let i = 0; i < children.length; i++) {
    let p = document.createElement("p");
    p.innerText = children[i];
    parent.appendChild(p);
}
