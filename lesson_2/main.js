// ******************************************************HOME******************************************************
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = Math.round(Math.random() * 60)
// console.log(time)
// if (time < 15) {
//     console.log('Це число попадає до першої чверті')
// } else if (time >= 15 && time < 30) {
//     console.log('Це число попадає до другої чверті')
// } else if (time >= 30 && time < 45) {
//     console.log('Це число попадає до третьої чверті')
// } else if (time >= 45 && time <= 59) {
//     console.log('Це число попадає до четвертої чверті')
// }
//                тут чітко прописував умову але якщо одна з умов здійснюєть то наступні не будуть розглядатись,
//                чи є сенс так прописувати чи краще так як в наступному завданні

//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = Math.round(Math.random()*32)
// console.log(day)
// if (day <=10){
//     console.log('first')
// }else if(day <= 20){
//     console.log('second')
// }else if(day <= 30){
//     console.log('third')
// }else if(day === 31){
//     console.log('fourth')
// }else {
//     console.log('error')
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = false
// let test = true
// console.log(test?'Вірно':'Неправильно')

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// a = 0
// a = 1
// a = -3
// console.log(a!==0?'Вірно':'Невірно')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//     let day = prompt('Введіть день тижня цифрою');
// switch (day) {
//     case '1':
//         console.log('Понеділок Лекція');
//         break;
//     case '2':
//         console.log('Вівторок ДЗ')
//         break;
//     case '3':
//         console.log('Середа Лекція')
//         break;
//     case '4':
//         console.log('Четверг Дз')
//         break;
//     case '5':
//         console.log('П\'ятниця Лекція')
//         break;
//     case '6':
//         console.log('Субота Англійська')
//         break;
//     case '7':
//         console.log('Неділя слинимось')
//         break;
//     default:
//         console.log('Нарушаєм !!! Від 1-7')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let days = 2004;
// if (!(days % 4)){
//     console.log('Цей рік є високовний')
// }else {
//     console.log('Звичайний рік')
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let candidate = prompt('Яка офіційна назва JavaScript?')
// console.log(candidate === 'ECMAScript' ? 'Правильно!' : 'Не знаєте? ECMAScript!')

// *******************************************Class******************************************
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('Введіть перше число')
// let b = +prompt('Введіть друге число')
// if (a > b) {
//     console.log(`${a} Є більшим`)
// } else if (a < b) {
//     console.log(`${b} Є більшим`)
// } else if (a === b) {
//     console.log('Ці числа є рівними')
// } else {
//     console.log('Галяк')
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let num = 60
// if (num > 0 && num <= 20) {
//     console.log('Перший падік')
// } else if (num > 20 && num <= 48){
//     console.log('Другий падік')
// }else if(num > 48 && num <= 90){
//     console.log('Третій падік')
// }else {
//     console.log('Галяк')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// console.log(+prompt() === 10? 'ВІРНО' : 'НЕВІРНО')

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = undefined
// if (typeof x === 'number') {
//     console.log(1)
// } else if (typeof x === 'string') {
//     console.log(2)
// } else if (typeof x === "boolean") {
//     console.log(3)
// } else if (typeof x === 'object') {
//     console.log(4)
// } else {
//     console.log('галяк');
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let xxx = +prompt('Яка температура');
// if (xxx > 10 && xxx <= 22){
//     console.log('йдемо вчитись')
// } else {
//     console.log('online')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let num = +prompt('Число від 1-5');
// switch (num) {
//     case 1:
//         console.log('Маєш тачку')
//         break
//     case 2:
//         console.log('Вже будеш на мото ганяти')
//         break
//     case 3:
//         console.log('Маєш норм мобілу')
//         break
//     case 4:
//         console.log('Виграв мівінку')
//         break
//     case 5:
//         console.log('Маєш гарний ствол :):)')
//         break
//     default:
//         console.log('Галяк')
// }

// ****************************************ADD******************************************
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >=3){
//     console.log('Маєш кучу кінтів 3 і більше')
// }else {
//     console.log('Менше ніж 3 кінта')
// }
// console.log(friends.length >=3? '3 і більше': 'меньше 3')


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let numA = 1;
// let numB = 2;
// let numC = 3;
// if (numA === numB || numA === numC || numB === numC) {
//     console.log('Неможна знайти середнє число так як мінімум два значення одинакові')
// } else if ((numB > numA && numA > numC) || (numB < numA && numA < numC)) {
//     console.log(`${numA} знаходиться по середині`);
// } else if ((numA > numB && numB > numC) || (numA < numB && numB < numC)) {
//     console.log(`${numB} знаходиться по середині`)
// } else if ((numA > numC && numC > numB) || (numA < numC && numC < numB)) {
//     console.log(`${numC} знаходиться по середині`)
// }else {
//     console.log('Саньочок натупив')
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let result = a + b < 4 ? 'Мало' : 'Багато'

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let num = 0
// console.log(num ? (num > 0 ? 'Позитивне' : 'Негативне') : 'Нуль')