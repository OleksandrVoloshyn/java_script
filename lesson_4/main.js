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