// // Все робити за допомоги js.
// // - створити блок,
// let divElement = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// divElement.classList.add('wrap','collapse','alpha','beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// divElement.innerText = 'txt'
// divElement.style.backgroundColor = 'grey'
// divElement.style.color = 'yellow'
// divElement.style.fontSize = '20px'
// // - додати цей блок в body.
// document.body.appendChild(divElement)
// // - клонувати його повністю, та додати клон в body.
// let cloneDiv = divElement.cloneNode(true);
// cloneDiv.innerText = 'txt 2'
// document.body.appendChild(cloneDiv)

// // // - Є масив:
// let arr = ['Main', 'Products', 'About us', 'Contacts']
// // // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // // Завдання робити через цикли.
// let ulElement = document.getElementsByClassName('menu')[0];
// arr.forEach(value => {
//     let li = document.createElement('li');
//     li.innerText = value
//     ulElement.appendChild(li)
// })

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// coursesAndDurationArray.forEach(value => {
//     let div = document.createElement('div');
//     div.innerText = `${value.title} : ${value.monthDuration} month`;
//     document.body.appendChild(div)
// })

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// // в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// coursesAndDurationArray.forEach(value => {
//     let div = document.createElement('div');
//     div.classList.add('item')
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading')
//     h1.innerText = value.title
//
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerText = value.monthDuration
//
//     div.append(h1,p)
//     document.body.appendChild(div)
// })

