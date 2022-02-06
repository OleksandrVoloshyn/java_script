// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5', true,false]
// console.log(arr)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = []
// arr[0] = true
// arr[1] = '1'
// arr[2] = 1
// arr[3] = ['1',2]
// console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} шотатам </div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>шотатам з ${i} індексом </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while (i < 20){
//     document.write(`<h1>Шотатам</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while (i < 20){
//     document.write(`<h1> Lorem ipsum dolor sit amet.${i} </h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1,2,3,4,5,6,7,8,9,0]
// for (const number of arr) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['1','2','3','4','5','6','7','8','9','0']
// for (const item of arr) {
//     console.log(item)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [true,5,2,7,['1'],'1',null,false,'2', {1:'1'}]
// for (const item of arr) {
//     console.log(item)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [1, 2, 3, 4, '1', '2', '3', '4', true, false]
// for (const item of arr) {
//     if (typeof item === "boolean") {
//         console.log(item)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [1, 2, 3, 4, '1', '2', '3', '4', true, false]
// for (const item of arr) {
//     if (typeof item === "number") {
//         console.log(item)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [1, 2, 3, 4, '1', '2', '3', '4', true, false]
// for (const item of arr) {
//     if (typeof item === "string") {
//         console.log(item)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr[i] = `element ${i}`
// }
// for (const item of arr) {
//     console.log(item)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 200; i+=2) {
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i < 202; i+=2) {
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 201; i+=2) {
//     console.log(i)
//     document.write(`${i} <br>`)
// }
// *************************************************Class********************************************
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

//     1. перебрати його циклом while
// let i = 0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }

//     2. перебрати його циклом for
// for (const number of arr) {
//     console.log(number)
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0
// while(i < arr.length){
//     if (i % 2){
//         console.log(arr[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2) {
//         console.log(arr[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0
// while(i < arr.length){
//     if (!(arr[i]%2)){
//         console.log(arr[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (const number of arr) {
//     if (!(number % 2)) {
//         console.log(number)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let i = 0;
// while (i < arr.length){
//     if(!(arr[i]%3)){
//         arr[i] = 'okten'
//     }
//     i++
// }
// console.log(arr)

// 8. вивести масив в зворотньому порядку.
// let reversArr = []
// let a = 0
// let b = arr.length - 1
// while (a < arr.length) {
//     reversArr[a] = arr[b]
//     a++;
//     b--;
// }
// console.log(reversArr)

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 9.1
// let i = arr.length-1
// while(i >= 0){
//     console.log(arr[i])
//     i--
// }

// 9.2
// for(let i = arr.length-1; i >= 0; i--){
//     console.log(arr[i])
// }

// 9.3
// let i = arr.length - 1;
// while (i >= 0){
//     if(i % 2){
//         console.log(arr[i])
//     }
//     i--
// }

// 9.4
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2) {
//         console.log(arr[i])
//     }
// }

// 9.5
// let i = arr.length - 1;
// while (i >= 0) {
//     if (!(arr[i] % 2)) {
//         console.log(arr[i])
//     }
//     i--
// }

// 9.6
// for (let i = arr.length-1; i >= 0; i--){
//     if (!(arr[i]%2)){
//         console.log(arr[i])
//     }
// }

// 9.7
// for (let i = arr.length - 1; i > -1; i--) {
//     if (!(arr[i] % 3)) {
//         arr[i] = 'okten'
//     }
// }
// console.log(arr)


/*
            Використовуючи данні з масиву, за допомоги document.write та циклу
            побудувати структуру по шаблону template1.1            */
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const item of listOfItems) {
//     document.write(`<li>${item} </li>`)
// }
// document.write(`</ul>`)


/*
			Використовуючи данні з масиву, за допомоги document.write та циклу
			побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
			Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
		    Шаблон застосувати до кожного об'єкта в масиві
// 			*/
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// // template 2.1
// // document.write(`<div class="wrap">`)
// // for (const simpson of simpsons) {
// //     document.write(
// //         `<p>NAME-${simpson.name}<br> SURNAME-${simpson.surname}<br> AGE-${simpson.age}<br> INFO-${simpson.info}</p>
// //         <img src="${simpson.photo}" alt="${simpson.name}">`
// //         )
// //     document.write(`<br>`)
// // }
// // document.write(`</div>`)
//
// // template 2.2
// // document.write(`<div>`)
// // for (const simpson of simpsons) {
// //     document.write(`<div class="person">`)
// //
// //     document.write(`<div class="txt">`)
// //     document.write(`<h2>${simpson.name} ${simpson.surname}. age is -${simpson.age}</h2>`)
// //     document.write(`<p>${simpson.info}</p>`)
// //     document.write(`</div>`)
// //
// //     document.write(`<div class="person_img"><img src="${simpson.photo}" alt="${simpson.name}"></div>`)
// //     document.write(`</div>`)
// // }
// document.write(`</div>`)

/*
			Використовуючи данні з масиву, за допомоги document.write та циклу
            побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
            Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
                */
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div class="wrap">`)
// for (const product of products) {
//     document.write(`<div class="product-card">`)
//     document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`)
//     document.write(`<img src="${product.image}" alt="${product.title}">`)
//     document.write(`</div>`)
// }
// document.write(`</div>`)
