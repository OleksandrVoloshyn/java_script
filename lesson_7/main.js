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
// // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// //
// // {
// //     id: 1,
// //     name: 'Leanne Graham',
// //     username: 'Bret',
// //     email: 'Sincere@april.biz',
// //     address: {
// //         street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: {
// //             lat: '-37.3159',
// //             lng: '81.1496'
// //         }
// //     },
// //     phone: '1-770-736-8031 x56442',
// //     website: 'hildegard.org',
// //     company: {
// //         name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// //     }
// // }
//
// class Customer {
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company
//     }
// }
//
// class Address {
//     constructor(street, suite, city, zipcode, lat, lng) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = {lat, lng}
//     }
// }
//
// class Company {
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// let user = new Customer(
//     1, 'Sasha', 'Sanya', 'mail@gmail.com',
//     new Address('myStreet', '1488', 'lviv', '123123', '-37.234', '82.2312'), '+3801287468',
//     'hildegard.org', new Company('okten', 'client-server ', 'harness real-time')
// )
// console.log(user)


// // -  Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// //     -назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результуючого об'єкту
// // {
// //     titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/},
// // ]
// //
// // }
//
// class Tag {
//     constructor(titleOfTag, action, attr) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attr = attr
//     }
// }
//
// class Attribute {
//     constructor(nameOfAttribute, action) {
//         this.nameOfAttribute = nameOfAttribute;
//         this.action = action;
//     }
// }
//
// const a = new Tag('a', 'предназначен для создания ссылок', [
//     new Attribute('href', 'Задает адрес документа, на который следует перейти.'),
//     new Attribute('title', 'Добавляет всплывающую подсказку к тексту ссылки.')
// ])
// const div = new Tag('div', 'является блочным элементом ', [
//     new Attribute('align', 'Задает выравнивание содержимого тега '),
//     new Attribute('title', 'Добавляет всплывающую подсказку к содержимому.')
// ])
// const h1 = new Tag('h1', 'наиболее важный заголовок', [
//     new Attribute('align', 'Определяет выравнивание заголовка.')
// ])
// const span = new Tag('span', 'предназначен для определения строчных элементов документа', [
//     new Attribute('class', 'позволяет связать тег со стилевым оформлением')
// ])
// const input = new Tag('input', 'позволяет создавать разные элементы интерфейса', [
//     new Attribute('type', 'Сообщает браузеру, к какому типу относится элемент формы.')
// ])
// const form = new Tag('form', 'устанавливает форму на веб-странице', [
//     new Attribute('action', 'Адрес программы или документа, который обрабатывает данные формы.')
// ])
// const option = new Tag('option', 'определяет отдельные пункты списка', [
//     new Attribute('value', 'Значение пункта списка'),
//     new Attribute('selected', 'Заранее устанавливает определенный пункт списка выделенным')
// ])
// const select = new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка', [
//     new Attribute('form', 'Связывает список с формой.'),
//     new Attribute('name', 'Имя элемента для отправки на сервер или обращения через скрипты.')
// ])

// // ***************************************************closures****************************************************
const getCustomData = () => {
    // Функція яку буду використовувати в UserCard для historyLogs
    //                                           date/month/year, hour:min:sec
    let x = new Date()
    return `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}, ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()} `
}


class UserCard {
    constructor(key) {
        this.balance = 100
        this.trasactionLimit = 100
        this.historyLogs = []
        this.key = key
    }

    getCardOptions() {
        console.log(this)
    }

    putCredits(money) {
        this.balance += money
        console.log('Маєш кучу грошей')
        this.historyLogs.push({'operationType': 'Put Credits', 'credits': money, 'operationTime': getCustomData()})
    }

    takeCredits(money) {
        if (this.balance >= money && this.trasactionLimit >= money) {
            this.balance -= money;
            console.log(`Кошти успішно зняті, на вашому рахунку залишилось ${this.balance} дєнєг`)
            this.historyLogs.push({'operationType': 'Get Money', 'credits': money, 'operationTime': getCustomData()})
            return;
        }
        console.log('На вашому рахунку недостатньо коштів або лімін транзакцій вичерпано')

    }

    setTransactionLimit(newLimit) {
        this.trasactionLimit = newLimit
        this.historyLogs.push({'operationType': 'Change limit', 'credits': newLimit, 'operationTime': getCustomData()})
        console.log('Ліміт змінено')
    }

    transferCredits(money, to) {
        if (this.balance >= money && this.trasactionLimit >= money) {
            const tax = (money / 100) / 2
            this.balance -= money
            to.balance += (money - tax)
            console.log('Транзакція успішна')
            return;
        }
        console.log('Упс перевірте будь ласка баланс та ліміт карти')

    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    }

    addCard() {
        if (this.cards.length < 3) {
            this.cards.push(new UserCard(this.cards.length + 1))
            console.log('Карта успішно створенна')
            return;
        }
        console.log('Кількість карт вичерпано')
    }

    getCardByKey(num) {
        for (const card of this.cards) {
            if (num === card.key) {
                return card;
            }
        }
        console.log('Карта з таким ключиком відсутня')
    }
}

let user = new UserAccount('bob')
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1)
let card2 = user.getCardByKey(2)

card1.putCredits(500)
card1.setTransactionLimit(800)
card1.transferCredits(300, card2)

card2.takeCredits(50)

card1.getCardOptions()
card2.getCardOptions()