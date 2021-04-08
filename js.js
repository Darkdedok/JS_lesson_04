//1) створити функцію яка приймає масив та виводить його
/* 
function consLog(x) {
    console.log(x);
}
let arr = [1, 2, 3, 4, 5];
consLog(arr); 
*/

//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
/* 
let x = [];
function arrOfRandNumbers (arr) {
    for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*100));
    }
    consLog(x);
}
function consLog(info) {
    console.log(info);
}
arrOfRandNumbers(x);
 */

//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/* 
function mathMin(number1, number2, number3) {
    if (number1 <= number2 && number1 <= number3) {
        console.log("Min numb = " + number1);
    }
    else if (number2 <= number3 && number2 <= number1){
        console.log("Min numb = " + number2);
    }
    else{
        console.log("Min numb = " + number3);
    }
}
mathMin(532, 3123, 1543); 
*/

//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/* function mathMin(number1, number2, number3) {
    if (number1 >= number2 && number1 >= number3) {
        console.log("Max numb = " + number1);
    }
    else if (number2 >= number3 && number2 >= number1){
        console.log("Max numb = " + number2);
    }
    else{
        console.log("Max numb = " + number3);
    }
}
mathMin(532, 3123, 1543);  
*/

//5) створити функцію яка повертає найбільше число з масиву
/* 
let x = [];

function arrOfRandNumbers(arr) {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

let maxNumb = (arrOfNumbs) => {
    let max = arrOfNumbs[0];
    for (let i = arrOfNumbs.length -1; i >= 1; i--) {
        if (arrOfNumbs[i] > max) {
            max = arrOfNumbs[i];
        }
    }
    return max;
}
arrOfRandNumbers(x);
console.log(x);let test = maxNumb(x);
console.log(test); 
*/


//6) створити функцію яка повертає найменьше число з масиву
/* 
let x = [];

function arrOfRandNumbers(arr) {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

let minNumb = (arrOfNumbs) => {
    let min = arrOfNumbs[0];
    for (let i = arrOfNumbs.length - 1; i >= 1; i--) {
        min = arrOfNumbs[i] < min ? arrOfNumbs[i] : min;
    }
    return min;
}
arrOfRandNumbers(x);
console.log(x);
let test = minNumb(x);
console.log(test);
 */

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
/* 
let x = [];
function arrOfRandNumbers (arr) {
    for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*10));
    }
}
function consLog(info) {
    console.log(info);
}
function sum(arrOfNumbs){
    return arrOfNumbs.reduce( (accumulator, currentValue) => accumulator + currentValue );
    }
arrOfRandNumbers(x);
consLog(x);
consLog (sum(x));
 */

//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/* 
let x = [];
let sum = 0;
function arrOfRandNumbers (arr) {
    for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*10));
    }
}
function consLog(info) {
    console.log(info);
}
function midd (secondArr){
 for (let i of secondArr){
     sum = sum + secondArr[i];
   result = Math.round(sum / secondArr.length);
 }
 return result;
}
arrOfRandNumbers(x);
consLog(x);
midd(x);
consLog(result);
 */

//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
/* 
let ar = [{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}]

function arrOfKey(arr) {
    let  arr2 = [];
    for (let item of arr) {
        for (let key in item) {
            arr2.push(key);
        }
    }
    return arr2;
}
console.log(arrOfKey(ar));
*/

//10 Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
/* 
let ar = [{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}]

function arrOfKey(arr) {
    let arr2 = [];
    for (let item of arr) {
        for (let key in item) {
            arr2.push(item[key]);
        }
    }
    return arr2;
}
console.log(arrOfKey(ar)); 
*/

//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
/* 
let arrOfRandNumbers = (arr) => {
    for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*10));
    }
}
let firstArr = [];
let secArr = [];
arrOfRandNumbers (firstArr);
arrOfRandNumbers (secArr);
console.log (firstArr);
console.log (secArr);
//console.log (sumOfArrs);
 let sumOfArrs = (arr1, arr2) => {
    let arrs = [];
    for (let i = arr1.length -1; i >= 0; i-- ){
    arrs[i] = arr1[i] + arr2[i];
    }
    return arrs;
}
console.log(sumOfArrs(firstArr, secArr));
 */

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/* 
let x = [];

function arrOfRandNumbers(arr) {
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

let numbs = (arrOfNumbs) => {
    let max = arrOfNumbs[0];
    let min = arrOfNumbs[0];
    for (let i = arrOfNumbs.length - 1; i >= 0; i--) {
        if (arrOfNumbs[i] > max) {
            max = arrOfNumbs[i];
        } else if (arrOfNumbs[i] < min) {
            min = arrOfNumbs[i];
        }
    }
    console.log(max);
    return min;
}
arrOfRandNumbers(x);
console.log(x);
console.log(numbs(x)); 
*/

//Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
/* 
let result = prompt('Arr of keys or values?', 'keys');
let ar = [{
    name: 'Dima',
    age: 13
}, {
    model: 'Camry'
}]

function arrOfKey(arr) {
    let arr2 = [];
    for (let item of arr) {
        for (let key in item) {
            if (result === 'keys') {
                arr2.push(key);
            } else if (result === 'values') {
                arr2.push(item[key]);
            } else {
                console.log('Wrong choice');
            }
        }

    }
    return arr2;
}
console.log(arrOfKey(ar)); 
*/

//створити функцію яка приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/* 
function swap(arr, i) {
     let x = arr[i];
     arr[i] = arr[i + 1];
     arr[i + 1] = x;
     return arr;
 } 
 let arr = ([1, 0, 6, 0, 3]);
console.log(swap(arr, 3));
 */

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
/* 
function swap(arr) {
    if (arr.length < 2 || arr.length > 100) {
        return;
    }
    const arr2 = [];
    let count = 0;
    for (let item of arr) {
        if (item !== 0) {
            arr2.push(item);
        } else count++;
    }
    for(let i = 0; i < count; i++) {
        arr2.push(0);
    }
    return arr2;
}

console.log(swap([1, 0, 6, 0, 3]));
console.log(swap([0, 1, 2, 3, 4]));
console.log(swap([0, 0, 1, 0])); 
*/

// Дано список імен.
/* 
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'

const nameNormalize = (name) => {
name = name.replaceAll(' ', '').split('');
let lastName = [];
for (let i = 1; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase()) {
       for (let j = i; j < name.length; j++) {
           lastName.push(name[j]);
       }
        name = name.slice(0, i);
    }
}
name = name.join('');
lastName = lastName.join('');
name = name + ' ' + lastName;
return name;
 }

 console.log(nameNormalize(n1));
 console.log(nameNormalize(n2));
 console.log(nameNormalize(n3));
  */

// Cтворити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
/* let helloFunc = () => {
    const divka = document.createElement('div');
    divka.innerHTML = ('Hello owu');
    document.body.appendChild(divka);
}
helloFunc();
 */

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
/* 
let helloFunc = (type, text) => {
    const divka = document.createElement(type);
    divka.innerHTML = (text);
    document.body.appendChild(divka);
}
helloFunc('div', 'test');
 */

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в одному блоці
/* let cars = [{
        id: 1,
        model: 'Reno',
        country: 'France'
    },
    {
        id: 2,
        model: 'bmw',
        country: 'Germany'
    },
    {
        id: 3,
        model: 'Toyota',
        country: 'Japan'
    },
    {
        id: 4,
        model: 'Mercedes',
        country: 'Germany'
    }
];

let addCarsOnPage = (cars, id) => {
    let div = document.getElementById(id);
    div.style.padding = '20px';

    for (const car of cars) {
        const carDiv = document.createElement('div');
        carDiv.innerHTML = `
                 ID: ${car.id} <br>
                 Model: ${car.model} <br>
                 Country: ${car.country} <br>
             `;
        carDiv.style.margin = '20px';
        div.appendChild(carDiv);
    }
}
addCarsOnPage(cars, 'cars');
 */

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок
/* 
const cars = [{
        id: 1,
        model: 'Reno',
        country: 'France'
    },
    {
        id: 2,
        model: 'bmw',
        country: 'Germany'
    },
    {
        id: 3,
        model: 'Toyota',
        country: 'Japan'
    },
    {
        id: 4,
        model: 'Mercedes',
        country: 'Germany'
    }
];

const addCarsOnPage2 = (cars, id) => {
    const div = document.getElementById(id);
    div.style.padding = '20px';

    for (const car of cars) {
        const carDiv = document.createElement('div');
        for (const key in car) {
            const divOfField = document.createElement('p');
            divOfField.innerText = key + ':  ' + car[key];
            carDiv.appendChild(divOfField);
        }
        div.appendChild(carDiv);
    }
}
addCarsOnPage2(cars, 'cars') 
*/