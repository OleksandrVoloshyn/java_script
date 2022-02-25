// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let textBlock = document.getElementById('text');
// let myBtn = document.getElementsByTagName('button')[0];
// myBtn.addEventListener('click', () => {
//     textBlock.style.display = 'none'
// })

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click',(e)=>{
//     e.target.style.display = 'none'
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form1 = document.forms.form1;
// form1.addEventListener('submit', (e) => {
//     e.preventDefault();
//     +form1.age.value < 18 ? console.log('Ваш вік менший 18') : console.log('Вхід дозволений');
// })

// - Создайте меню, которое раскрывается/сворачивается при клике
// let menuBlock = document.getElementsByClassName('menu')[0];
// menuBlock.addEventListener('click', e => {
//     for (const el of e.target.children) {
//         el.classList.toggle('hidden')
//     }
// })

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {'title': 'comment1', 'body': 'lorem ipsum dolo sit ameti 1'},
//     {'title': 'comment2', 'body': 'lorem ipsum dolo sit ameti 2'},
//     {'title': 'comment3', 'body': 'lorem ipsum dolo sit ameti 3'},
//     {'title': 'comment4', 'body': 'lorem ipsum dolo sit ameti 4'},
//     {'title': 'comment5', 'body': 'lorem ipsum dolo sit ameti 5'}
// ]
// const createList = comments => {
//     let wrapBlock = document.createElement('div');
//     wrapBlock.classList.add('wrap')
//
//     for (const comment of comments) {
//         let commentBlock = document.createElement('div');
//         commentBlock.innerText = comment['title'];
//         commentBlock.classList.add(`${comment['title']}`)
//
//         let btn = document.createElement('button');
//         btn.classList.add(`${comment['title']}_btn`)
//         btn.innerText = 'Click'
//         commentBlock.appendChild(btn)
//
//
//         let bodyBlock = document.createElement('div');
//         bodyBlock.innerText = comment['body']
//         commentBlock.appendChild(bodyBlock)
//
//         btn.addEventListener('click', () => {
//             bodyBlock.classList.toggle('hidden')
//         })
//
//         wrapBlock.appendChild(commentBlock)
//     }
//     document.body.appendChild(wrapBlock)
// }
// createList(comments)

// ***********************************************CLASS***************************************************************************
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
// let mainBtn = document.getElementById('main_btn');
// mainBtn.addEventListener('click', () => {
//     for (const item of [...form1,...form2]) {
//         console.log(item.value)
//     }
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let mainForm = document.forms.main_form;
// mainForm.onsubmit = (e) => {
//     e.preventDefault()
//     let row = e.target.row.value;
//     let column = e.target.column.value;
//     let txt = e.target.inside.value;
//     let tableElement = document.createElement('table');
//     tableElement.setAttribute('border','5px')
//
//     for (let i = 0; i < row; i++) {
//         let rowElement = document.createElement('tr')
//         for (let j = 0; j < column; j++) {
//             let columnElement = document.createElement('td');
//             columnElement.innerText = txt
//             rowElement.appendChild(columnElement)
//         }
//         tableElement.appendChild(rowElement)
//     }
//     document.body.appendChild(tableElement)
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let arrBadWord = ['asd', 'qwe', 'xxx']
// let jail = []
// let mainForm = document.forms.main_form;
//
// mainForm.addEventListener('submit', e => {
//     e.preventDefault()
//     console.log(e.target.xxx.value)
//     for (const word of arrBadWord) {
//         if (e.target.xxx.value.toLowerCase().includes(word)) {
//             alert(`Нарушаєм !!!! Ваші документіки`)
//             jail.push('Мамкин хуліган')
//         }
//     }
// })
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//todo                          Якщо я правильно зрозумів то це завдання дублює попереднє

// ***********************************************Additional***************************************************************************
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан