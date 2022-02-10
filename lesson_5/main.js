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