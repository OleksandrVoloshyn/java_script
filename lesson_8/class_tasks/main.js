// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// document.getElementById('main_header').classList.add('xxx')

// b) робить шириниу елементу ul 400px
// document.getElementsByTagName(`ul`)[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const element of elementsByClassName) {
//     element.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// console.log(document.getElementsByClassName('listElement2')[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liElements = document.getElementsByTagName('li');
// for (const element of liElements) {
//     element.style.backgroundColor = 'grey'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let aElements = document.getElementsByTagName('a');
// for (const aElement of aElements) {
//     aElement.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aElements = document.getElementsByTagName('a');
// for (const aElement of aElements) {
//     if (aElement.innerText === 'link3'){
//         aElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementsByTagName = document.getElementsByTagName('a');
// for (const el of elementsByTagName) {
//     let xxx = el.innerText
//     el.classList.add(`element_${xxx}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const el of elementsByClassName) {
//     el.style.backgroundColor = prompt('color: ');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const el of elementsByClassName) {
//     if(el.innerText === 'content 2 segment'){
//         el.style.color = prompt('color: ')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// document.getElementsByClassName('content_1')[0].innerText = prompt('txt: ')

// l) отримати елементи p та змінити їм padding на 20px
// let elementsByTagName = document.getElementsByTagName('p');
// for (const el of elementsByTagName) {
//     el.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// for (const el of elementsByClassName) {
//     el.innerText = 'dec-2021'
// }
