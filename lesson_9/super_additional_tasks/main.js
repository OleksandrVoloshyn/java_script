// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     }, {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     }, {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     }, {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     }, {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     }, {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     }, {
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     }, {
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     }, {
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     }, {
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     }, {
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }];
//
// let newUsers = [...users.map(value => value.address)]

// const createElement = (tag, content, className) => {
//     let res = document.createElement(tag)
//     if (content) {
//         res.innerText = content
//     }
//     if (className) {
//         res.classList.add(className)
//     }
//     return res
// }
// let mainBlock = createElement('main', null, 'main');
// const scan = (obj, father) => {
//     for (const objKey in obj) {
//         let value = obj[objKey]
//         console.log(value)
//         if (typeof value === 'object') {
//             let newFather = createElement('div', null, objKey)
//             father.appendChild(newFather)
//             scan(value, newFather)
//         } else {
//             let innerBlock = createElement('div', value, objKey)
//             father.appendChild(innerBlock)
//         }
//     }
// }
//
// users.forEach(user => {
//     let wrapDiv = createElement('div', null, 'wrap');
//     mainBlock.appendChild(wrapDiv)
//     scan(user, wrapDiv)
// })
// document.body.appendChild(mainBlock)

// //
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let contentBlock = document.getElementById('content');
// const scan = (children, father) => {
//     for (const child of children) {
//         if(child.children){
//             scan(child.children, children)
//         }
//         if (child.tagName === 'H2') {
//             father = createElement('ul',child.innerText,'h2');
//         }
//         if (child.tagName === 'P') {
//             let liElement = createElement('li',child.innerText,'li');
//             father.appendChild(liElement)
//         }
//         if(father && !father.length){
//             contentBlock.append(father)
//         }
//     }
// }
// scan(document.body.children)


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
const createElement = (tag, content, classNames) => {
    let res = document.createElement(tag)
    if (content) {
        res.innerText = content
    }
    if (classNames) {
        for (const className of classNames) {
            res.classList.add(className)
        }
    }
    return res
}

let wrapBlock = createElement('div', null, ['myWrap']);
document.body.appendChild(wrapBlock)

// rules.forEach(rule => {
//     let ruleBlock = createElement('div', null, [`rules`]);
//     wrapBlock.appendChild(ruleBlock)
//     for (const ruleKey in rule) {
//         if (ruleKey === 'title') {
//             ruleBlock.appendChild(createElement('h2', rule[ruleKey], ))
//         }
//         if (ruleKey === 'body') {
//             ruleBlock.appendChild(createElement('p', rule[ruleKey], ))
//         }
//     }
// })

// ***********************************************************************************************8
// for (let i = 0; i < rules.length; i++) {
//     let ruleBlock = createElement('div', null, ['rules',`rule${i+1}`]);
//     wrapBlock.appendChild(ruleBlock)
//     // console.log(rules[i]);
//     for (const ruleKey in rules[i]) {
//         if (ruleKey === 'title') {
//             ruleBlock.appendChild(createElement('h2', rules[i][ruleKey],))
//         }
//         if (ruleKey === 'body') {
//             ruleBlock.appendChild(createElement('p', rules[i][ruleKey],))
//         }
//     }
// }
