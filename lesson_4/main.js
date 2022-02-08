// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function getRectangleArea(a, b) {
//     return a * b
// }
//
// console.log(getRectangleArea(10, 15));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function getRoundArea(r) {
//     return Math.PI * (r**2)
// }
//
// console.log(getRoundArea(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function getCylinderArea(h, r) {
//     return (2 * Math.PI) * r * (r + h);
// }
//
// console.log(getCylinderArea(10, 4))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3,4];
// function arrLoger(arr=[]){
//     for (const item of arr) {
//         console.log(item)
//     }
// }
// arrLoger(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createParagraf(txt) {
//     document.write(`<p>${txt}</p>`)
// }
//
// createParagraf('some txt')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createList(txt) {
//     document.write('<div>')
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write('</div>')
// }
//
// createList('some txt')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createList(txt,quantity){
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createList('some txt', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function createList(arr) {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// createList([1, 2, 3, '1', '2', true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function createListFromObject(arr) {
//     for (const person of arr) {
//         document.write(`<div>id:${person.id} name-${person.name}  age-${person.age}</div>`)
//     }
//
// }
//
// createListFromObject([
//     {'id': 1, 'name': 'Sasha', 'age': 10},
//     {'id': 2, 'name': 'Masha', 'age': 20},
//     {'id': 3, 'name': 'Izya', 'age': 30},
// ])

// **********************************************Class***********************************************

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function getMinValue(a, b, c) {
//     if (a === b || a === c || b === c) {
//         console.log('мінімум двачисла є одинаковими')
//     } else if (a < b && a < c) {
//         console.log(`min - ${a}`)
//     } else if (b < a && b < c) {
//         console.log(`min - ${b}`)
//     }else if (c<a && c<b){
//         console.log(`min - ${c}`)
//     }else {
//         console.log('error')
//     }
// }
// getMinValue(1, 2, 3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function getMaxValue(a, b, c) {
//     if (a === b || a === c || b === c) {
//         console.log('мінімум два числа є одинаковими')
//     } else if (a > b && a > c) {
//         console.log(`max - ${a}`)
//     } else if (b > a && b > c) {
//         console.log(`max - ${b}`)
//     } else if (c > a && c > b) {
//         console.log(`max - ${c}`)
//     } else {
//         console.log('error')
//     }
// }
//
// getMaxValue(1, 2, 3)

// - створити функцію яка повертає найбільше число з масиву
// function getMaxValue(a, b, c) {
//     if (a === b || a === c || b === c) {
//         return 'Числа мають бути різні'
//     } else if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } else if (c > a && c > b) {
//         return c
//     }
//     return 'error'
// }
//
// getMaxValue(1, 2, 3)

// - створити функцію яка повертає найменьше число з масиву
// function getMaxValue(a, b, c) {
//     if (a === b || a === c || b === c) {
//         return 'Числа мають бути різні'
//     } else if (a < b && a < c) {
//         return a
//     } else if (b < a && b < c) {
//         return b
//     } else if (c < a && c < b) {
//         return c
//     }
//     return 'error'
// }
//
// getMaxValue(1, 2, 3)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function getSum(arr) {
//     let res = 0;
//     for (const num of arr) {
//         res += num
//     }
//     return res
// }
//
// console.log(getSum([12, 3, 4]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function getAvg(arr) {
//     let res = 0;
//     for (const num of arr) {
//         res += num
//     }
//     return  Math.round(res / arr.length)
// }
//
// console.log(getAvg([12, 10, 4]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function getMinLogMax(...arg){
//     let min = arg[0];
//     let max = arg[0];
//     for (const num of arg) {
//         if (num <= min){
//             min = num
//         }else if(num >= max){
//             max = num
//         }
//     }
//     console.log(`Max value : ${max}`)
//     return min
// }
//
// console.log(getMinLogMax(1, 2, 3, 4, 5, 6, 7, 8, 0,22));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function getArrOfRandomNums(len){
//     let arrNums = []
//     for (let i = 0; i < len; i++) {
//         arrNums[arrNums.length] = Math.round(Math.random()*100)
//     }
//     console.log(arrNums)
// }
// getArrOfRandomNums(20);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function getArrOfRandomNums(len, limit){
//     let arrNums = []
//     for (let i = 0; i < len; i++) {
//         arrNums[arrNums.length] = Math.round(Math.random()*limit)
//     }
//     return arrNums
// }
//
// console.log(getArrOfRandomNums(20,40));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverseArr(arr) {
//     // console.log(arr)
//     let newArr = []
//     let i = 0;
//     let j = arr.length-1;
//     while (i < arr.length) {
//         newArr[i] = arr[j]
//         i++;
//         j--;
//     }
//     // console.log(newArr)
//     return newArr
// }
//
// reverseArr([1, 4, 6, 7, 8]);

// function reverseArr(arr) {
//     let newArr = [];
//     for (let i = 0, j = arr.length - 1; i < arr.length, j >= 0; i++, j--) {
//         newArr[i] = arr[j]
//     }
//     return newArr
// }
//
// reverseArr([15, 7, 8, 9, 3])

