// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let myForm = document.forms.main;
// myForm.addEventListener('submit', e => {
//     e.preventDefault()
//     console.log(myForm.age.value)
// localStorage.setItem('name', myForm.name.value)
// localStorage.setItem('age', myForm.age.value)
//
//     localStorage.setItem('user', JSON.stringify({'name': myForm.name.value, 'age': myForm.age.value}))
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let carForm = document.forms.car;
// carForm.addEventListener('submit', e => {
//     e.preventDefault()
//     localStorage.setItem('car', JSON.stringify({
//         'model': carForm.model.value,
//         'type': carForm.type.value,
//         'volume': carForm.volume.value
//     }))
// })

// *************************************************Class**********************************************
// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.