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

}
function consLog(info) {
    console.log(info);
}
arrOfRandNumbers(x);
consLog(x);
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
function arrOfRandNumbers (arr) {
    for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*100));
    }
}
function consLog(info) {
    console.log(info);
}
function maxNumb(arrOfNumbs){
  max = Math.max(...arrOfNumbs);
  return max;
}
arrOfRandNumbers(x);
consLog(x);
maxNumb(x);
consLog(max);
 */

//6) створити функцію яка повертає найменьше число з масиву
/* 
let x = [];
function arrOfRandNumbers (arr) {
    for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random()*100));
    }
}
function consLog(info) {
    console.log(info);
}
function minNumb(arrOfNumbs){
  min = Math.min(...arrOfNumbs);
  return min;
}
arrOfRandNumbers(x);
consLog(x);
minNumb(x);
consLog(min);
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