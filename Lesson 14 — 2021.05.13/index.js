/*
1. Написать функцию generateList(array)
   принимает массив из чисел и массивов чисел, например [1,2,3]
   нужно сгенерировать список из елементов,

[1,2,3]
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

* если в массиве встречается массив то делать вложенный список, для проверки на массив используйте Array.isArray()
[1,2, [1.1,1.2,1.3] ,3]

    <ul>
        <li>1</li>
        <li>2</li>
        <li>
            <ul>
                <li>1.1</li>
                <li>1.2</li>
                <li>1.3</li>
            </ul>
        </li>
        <li>3</li>
    </ul>

2. Вывести таблицу 10 × 10, заполненную числами от 1 до 100
 */

"use strict";


function generateList(array) {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {

        const li = document.createElement('li');

        if (!(Array.isArray(array[i]))) {
            li.innerText = array[i].toString();
        } else {
            const innerUl = document.createElement('ul');
            li.appendChild(innerUl)
            for (let j = 0; j < array[i].length; j++) {
                const innerLi = document.createElement('li');
                innerLi.innerText = array[i][j].toString();
                innerUl.appendChild(innerLi);
            }
        }
        ul.appendChild(li);
    }
    return ul;
}

let inp = [1,2,3]
let res = generateList(inp)
console.log(res)
document.body.appendChild(res);

inp = [1, 2, [1.1, 1.2, 1.3], 3]
res = generateList(inp)
console.log(res)
document.body.appendChild(res);

function generateFuckingTable(){
    const table = document.createElement('table');
    let cnt = 1;

    for (let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < 10; j++) {
            const td = document.createElement('td');
            td.innerText = cnt.toString();
            cnt++;
            tr.appendChild(td);
        }
    }
    return table;
}

const table = generateFuckingTable();
console.log(table)
document.body.appendChild(table);
