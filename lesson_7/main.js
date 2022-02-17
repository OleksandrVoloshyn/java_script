// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let usersArr = []
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// for (let i = 0; i < 10; i++) {
//     usersArr.push(new User(i, `name${i}`, `surname${i}`, `mail${i}@gmail.com`, `095086000${i}`))
// }
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let usersPairArr = usersArr.filter(value => !(value.id % 2))
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// usersPairArr.sort((a, b) => a.id - b.id)

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clientsArr = []
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const arrOrders = () => {
//     let len = Math.round(Math.random() * 10)
//     let res = []
//     for (let i = 1; i < len; i++) {
//         res.push(`order${i}`)
//     }
//     return res;
// }
//
// for (let i = 9; i >= 0; i--) {
//     clientsArr.push(new Client(i, `name${i}`, `surname${i}`, `mail${i}@gmail.com`, `095086000${i}`, arrOrders()))
// }
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clientsArr.sort((a,b)=> a.order.length - b.order.length)
// console.log(clientsArr)

// ***************************************************Class*************************************************

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, creator, year, maxSpeed, engine) {
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function (){
//         console.log(`model-${this.model}`)
//         console.log(`creator-${this.creator}`)
//         console.log(`year-${this.year}`)
//         console.log(`maxSpeed-${this.maxSpeed}`)
//         console.log(`engine-${this.engine}`)
//         if (this.driver){
//             console.log(`driver-${this.driver.name}:age ${this.driver.age}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newValue){
//         this.maxSpeed += newValue
//         console.log(`Швидкість машинки збільшена до ${this.maxSpeed}`)
//     };
//     this.changeYear = function (newValue){
//         this.year = newValue
//         console.log(`Рік випуску змінено на ${this.year}`)
//     };
//     this.addDriver = function (driver){
//         this.driver = driver
//         console.log(this.driver)
//     }
// }
//
// let bibika = new Car('X5','BMW',2020, 220, '3.0')

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//     constructor(model, creator, year, maxSpeed, engine) {
//         this.model = model;
//         this.creator = creator;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info(){
//         console.log(`model-${this.model}`)
//         console.log(`creator-${this.creator}`)
//         console.log(`year-${this.year}`)
//         console.log(`maxSpeed-${this.maxSpeed}`)
//         console.log(`engine-${this.engine}`)
//         if (this.driver){
//             console.log(`driver-${this.driver.name}:age ${this.driver.age}`)
//         }
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed
//         console.log(`Нова швидкість ${this.maxSpeed}`)
//     };
//     changeYear(newValue){
//         this.year = newValue
//     }
//     addDriver(driver){
//         this.driver = driver
//     }
// }
// let horse = new Car('male','mustang',2021,88,'1')
// horse.addDriver({'name':'Sasha', 'age':'23'})
// horse.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
//
//     findGirl(girls) {
//         // let garem = []
//         // for (const girl of cinderellasArr) {
//         //     if (girl.foot === prince.shoe) {
//         //         garem.push(girl)
//         //     }
//         // }
//         // return garem
//         // ******************************************
//         // return girls.find(value => value.foot === this.shoe);
//     }
// }
//
// let cinderellasArr = [
//     new Cinderella('Sasha', 23, 43),
//     new Cinderella('Masha', 19, 39),
//     new Cinderella('Inna', 22, 37),
//     new Cinderella('Olya', 25, 37),
//     new Cinderella('Pes', 27, 38),
//     new Cinderella('Vika', 70, 36),
//     new Cinderella('Yulia', 16, 35),
//     new Cinderella('Mikola', 21, 34),
//     new Cinderella('Natasha', 27, 40),
//     new Cinderella('Zlata', 17, 41),
// ]
// let prince = new Prince('Sasha', 40, 43)
// console.log(prince.findGirl(cinderellasArr));

// ***************************************************Ad****************************************************
//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ***************************************************closures****************************************************
// https://github.com/GrayHead/js_demos/blob/master/js/preview/lesson7/lesson7_tasks/additional/%D1%81losures.pdf