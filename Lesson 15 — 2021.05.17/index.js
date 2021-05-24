/*
1. Напишите функцию, которая тоглит класс.
   Ф-ия должна принимать два аргумента: элемент и класс, который нужно добавить/убрать из набора классов.
   Решить нужно без использования classList. Ф-ия должна работать со свойством className элемента.

  <div class="box shadow radius"></div>
  toggleClass($div, 'border') // вызов ф-ии добавит класс элементу
  <div class="box shadow radius border"></div>
  toggleClass($div, 'border') // вызов ф-ии удалит класс у элемента
  <div class="box shadow radius border"></div>

2. Напишите функция, которая заполняет поля формы данными из параметров запроса.
   Для декодирования email используйте ф-ию decodeURI()

Код формы:

<form id="reg-form" action="">
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <input type="text" placeholder="City">
  <select>
    <option value="0" selected>Gender</option>
    <option value="1">Male</option>
    <option value="2">Female</option>
  </select>
  <input type="checkbox" value="true"> Terms and conditions
  <button type="submit">Send</button>
</form>

Строка с параметрами:
?name=John&email=johndoe%40mail.com&city=Jersey&gender=1&terms=true

* форму нужно доработать, чтоб она корректно работала с параметрами
*/

'use strict';

// 1
function toggleClass(elem, className) {
    let classes = elem.className.split(' ');

    if (classes.includes(className)) {
        classes.splice(classes.indexOf(className), 1);
    } else {
        classes.push(className);
    }

    elem.className = classes.join(' ');
    return elem;
}

let $div = document.createElement('div');
$div.className = "box shadow radius";
console.log("Original: ", $div.cloneNode(true))

$div = toggleClass($div, "border")
console.log("Added: ", $div.cloneNode(true))

$div = toggleClass($div, "border")
console.log("Deleted: ", $div.cloneNode(true))


// 2
// ?name=John&email=johndoe%40mail.com&city=Jersey&gender=1&terms=true
// Getting query string
const queryString = window.location.search;

// Getting query parameters
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name')
const email = decodeURI(urlParams.get('email'))
const city = urlParams.get('city')
const gender = urlParams.get('gender')
const terms = urlParams.get('terms')

// First way
// const $form = document.getElementById('reg-form');
// const $children = $form.getElementsByName("acc")[0]
// const $nameInput = $children[0];
// const $emailInput = $children[1];
// const $textInput = $children[2];
// const $genderInput = $children[3];
// const $termsInput = $children[4];

// Getting html elements to change values - Other way
const $nameInput = document.getElementsByName("name-input")[0];
const $emailInput = document.getElementsByName("email-input")[0];
const $textInput = document.getElementsByName("city-input")[0];
const $genderInput = document.getElementsByName("gender-input")[0];
const $termsInput = document.getElementsByName("terms-input")[0];

// Changing values according to query strings
$nameInput.value = name;
$emailInput.value = email;
$textInput.value = city;
$genderInput.checked = gender;
if (terms === "true") {
    $termsInput.checked = true;
}
