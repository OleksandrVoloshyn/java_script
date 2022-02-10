// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// const rectangleArea = (a, b) => a * b;
// console.log(rectangleArea(5,3))

// - створити функцію яка обчислює та повертає площу кола
// const roundArea = r => Math.PI * (r ** 2)
// console.log(roundArea(5));

// - створити функцію яка обчислює та повертає площу циліндру
// const cylinderArea = (h, r) => (2 * Math.PI) * r * (r + h);
// console.log(cylinderArea(6,3))

// - створити функцію яка приймає масив та виводить кожен його елемент
// const arrLog = arr => {
//     for (const item of arr) {
//         console.log(item)
//     }
// }
// arrLog([1,2,3,4,5])

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const createP = txt => {
//     document.write(`<p>${txt}</p>`)
// }
// createP('test')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createList = txt => {
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// createList('test')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const createList = (txt,num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createList('test',1)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const createList = arr => {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createList([1,2,3,'qwe',true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const createBlocks = arrObjects => {
//     for (const person of arrObjects) {
//         document.write(`<div>id:${person.id} name-${person.name}  age-${person.age}</div>`)
//     }
// }
// createBlocks([
//     {'id': 1, 'name': 'Sasha', 'age': 10},
//     {'id': 2, 'name': 'Masha', 'age': 20},
//     {'id': 3, 'name': 'Izya', 'age': 30},
// ])

// ***************************************************CLASS****************************************************************
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const getMin = (num1, num2, num3) => {
//     if (num1 === num2 || num1 === num3 || num2 === num3) {
//         console.log('мінімум двачисла є одинаковими')
//     } else if (num1 < num2 && num1 < num3) {
//         console.log(`min - ${num1}`)
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(`min - ${num2}`)
//     } else if (num3 < num1 && num3 < num2) {
//         console.log(`min - ${num3}`)
//     } else {
//         console.log('error')
//     }
// }
// getMin(2, 3, 1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const getMax = (num1, num2, num3) => {
//     if (num1 === num2 || num1 === num3 || num2 === num3) {
//         console.log('мінімум двачисла є одинаковими')
//     } else if (num1 > num2 && num1 > num3) {
//         console.log(`max - ${num1}`)
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`max - ${num2}`)
//     } else if (num3 > num1 && num3 > num2) {
//         console.log(`max - ${num3}`)
//     } else {
//         console.log('error')
//     }
// }
// getMax(1, 3, 5)

// - створити функцію яка повертає найбільше число з масиву
// const getMaxFromArrey = arr => {
//     let maxNum = arr[0]
//     for (const candidate of arr) {
//         if (candidate > maxNum) {
//             maxNum = candidate
//         }
//     }
//     return maxNum;
// }
// console.log(getMaxFromArrey([1, 2, 3, 4, 5, 6, 7, 8, 6, -2]));

// - створити функцію яка повертає найменьше число з масиву
// const getMinFromArrey = arr => {
//     let minNum = arr[0]
//     for (const candidate of arr) {
//         if (candidate < minNum) {
//             minNum = candidate
//         }
//     }
//     return minNum;
// }
// console.log(getMinFromArrey([1, 2, 3, 4, 5, 6, 7, 8, 6, -2]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const sumNums = arr =>{
//     let res = 0
//     for (const num of arr) {
//         res += num
//     }
//     return res
// }
//
// console.log(sumNums([1, 2, 3, 4, 6, 7]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const getAvg = arr =>{
//     let res = 0
//     for (const num of arr) {
//         res += num
//     }
//     return (res / arr.length)
// }
// console.log(getAvg([5, 5, 6,4]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const getMinLogMax = (...nums) => {
//     let min = nums[0]
//     let max = nums[0]
//     for (const num of nums) {
//         if (num <= min) {
//             min = num
//         } else if (num >= max) {
//             max = num
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(getMinLogMax(1, 23, 5, 64, 57, 56, 734, 0));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// const getRandomArrOfNums = len => {
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     console.log(arr);
// }
// getRandomArrOfNums(4)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const getRandomArrOfNumsWithLimit = (len, limit) => {
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         arr.push(Math.round(Math.random()*limit));
//     }
//     console.log(arr);
// }
// getRandomArrOfNumsWithLimit(4,20)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// const reverseArr = arr => {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(reverseArr([1, 2, 3]));