// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const arr = ['hello world', 'lorem ipsum', 'javascript is cool']
// arr.forEach(value => console.log(value.length))

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// const arr = ['hello world', 'lorem ipsum', 'javascript is cool']
// console.log(arr.map(value => value.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// const arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// console.log(arr.map(value => value.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// const stringToarray = str => str.split(' ')
// console.log(stringToarray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => str.substring(0,length)
// console.log(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// const insert_dash = str => str.toUpperCase().replaceAll(' ', '-')
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// const foo = str => str.charAt(0).toLowerCase() + str.slice(1);
// console.log(foo('Some text'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// const capitalize = str => {
//     const arr = str.split(' ')
//     return arr.map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ')
// }
// console.log(capitalize('Some txt some txt'));


// ***************************************************Class******************************************************
// // - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// const normalizeStr = str => {
//     return str
//         .replaceAll('.', ' ')
//         .replaceAll('-', ' ')
//         .replaceAll('_', ' ')
//         .split(' ')
//         .filter(value => value)
//         .join(' ')
// }
// console.log(normalizeStr(n2));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const get100NumsArr = () => {
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
// }
// let arr = get100NumsArr();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// arr.sort((a, b) => a - b)
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let newArr = arr.filter(value => value && !(value % 2))
// console.log(newArr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let newArr = arr.map(value => value.toString())
// console.log(newArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// const sortNums = (arr, direction) => {
//     return arr.sort((a, b) => direction === 'ascending' ? a - b : b - a)
// }
// console.log(sortNums(arr, 'ascending'));


// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// // console.log(coursesAndDurationArray.sort((a, b)  => b['monthDuration'] - a['monthDuration']));
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))

// *************************************************************Aditional***************************************
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// const citString = (str, n) => {
//     let arr = []
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.slice(i,i+n))
//     }
//     return arr
// }
// console.log(citString('наслаждение', 3))

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// const emailValidator = mail => {
//     const candidate = mail.toLowerCase()
//     const index = candidate.indexOf('@')
//     const isDotAfterSymbol = candidate[index + 1] === '.' || candidate[index + 2] === '.'
//
//     if (index <= 0 || isDotAfterSymbol || !candidate[index+3]) {
//         return 'Галяк'
//     }
//     return 'Маєш гарний email'
// }
//
// console.log(emailValidator('mail@gmail.com'));


// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// console.log(coursesArray.sort((a,b)=>b.modules.length - a.modules.length))

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// const count = (str, stringsearch) => {
//     let res = 0;
//     for (const item of str) {
//         if (item === stringsearch) {
//             res += 1
//         }
//     }
//     // не впевнений що таке виконання підходить для додаткових задач, але робить те шо має ))
//     return res
// }
// console.log(count('Астрономия это наука о небесных объектах', 'о'))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// const cutString = (str, n) => {
//     let arr = str.split(' ')
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.length > n){
//             arr.pop()
//         }
//     }
//     return arr.join(' ')
// }
// console.log(cutString('Сила тяжести приложена к центру масс тела', 5))

