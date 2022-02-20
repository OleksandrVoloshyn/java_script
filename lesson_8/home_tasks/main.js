// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
// console.log(document.getElementById('content').textContent);

// -- отримує текст з блоку з id "rules"
// console.log(document.getElementById('rules').textContent)

// -- замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById('content').innerText = 'txt txt txt txt txt txt txt';

// -- замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById('rules').innerHTML = '<h2>lorem10</h2>'

// -- змініть кожному елементу колір фону на червоний
// let childrenList = document.body.children;
// for (const child of childrenList) {
//     child.style.backgroundColor = 'red'
// }

// -- змініть кожному елементу колір тексту на синій
// let children = document.body.children;
// for (const child of children) {
//     child.style.color = 'blue'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classList = document.getElementById('rules').classList;
// classList.forEach(value => console.log(value))

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elementsByClassName = document.getElementsByClassName('fc_rules');
// for (const element of elementsByClassName) {
//     element.style.color = 'red'
// }