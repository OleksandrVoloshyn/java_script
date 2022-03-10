// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let myForm = document.forms.main;
// myForm.addEventListener('submit', e => {
//     e.preventDefault()
//     localStorage.setItem('name', myForm.name.value)
//     localStorage.setItem('age', myForm.age.value)
//     //
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
let users = [
    {id: 1, name: 'petya', age: 30, status: true},
    {id: 2, name: 'kolya', age: 29, status: true},
    {id: 3, name: 'vasya', age: 31, status: false},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites
// улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let mainBlock = document.createElement('div');
let a = document.createElement('a');
a.href = './favorites.html'
a.innerText = 'Go to Favorites'

users.forEach(user => {
    let userBlock = document.createElement('div');
    userBlock.innerText = `id-${user.id} ${user.name}`

    let addToLove = document.createElement('button');
    addToLove.innerText = 'Add to my love'

    addToLove.addEventListener('click', () => {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            let isFavorite = false

            if (favorites.length) {
                favorites.forEach(loveUser => {
                    if (loveUser.id === user.id) {
                        isFavorite = true
                    }
                })
            }
            // Для того щоб не додавати до масиву ті самі обєкти, додов в масив унікальне поле id по якому проводив перевірку

            if (!isFavorite) {
                favorites.push(user)
                localStorage.setItem('favorites', JSON.stringify(favorites))
            }
        }
    )

    userBlock.appendChild(addToLove)
    mainBlock.appendChild(userBlock)
})

document.body.append(mainBlock, a)