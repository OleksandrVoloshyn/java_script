// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let one = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
// let two = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(one)
// console.log(two)
// alert(one)
// alert(two)
// document.write(one)
// document.write(two)

// - Переприсвоїти кожній змінній з завдання значення на довільне.
// one[4] = 2
// two[6] = 999

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(one)
// console.log(two)
// alert(one)
// alert(two)
// document.write(one)
// document.write(two)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = 'Oleksandr'
// let lastName = 'Voloshyn'
// let middleName = 'batkovich'
// let person = `${lastName} ${firstName} ${middleName}`
// console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let firstName = prompt('ur name')
// let middleName = prompt('ur father name')
// let age = prompt('age')

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a, typeof b, typeof c)

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// console.log(5<6)

// 5 ? 6 -> false
// console.log(5>6)

// 5 ? 6 -> false
// console.log(5 ==6)

// 5 ? 6 -> false
// console.log(5 === 6)

// 10 ? 10 -> true
// console.log(10 == 10)

// 10 ? 10 -> true
// console.log(10 === 10)

// 10 ? 10 -> false
// console.log(10 !== 10)

// 10 ? 10 -> false
// console.log(10 > 10)

// 10 ? 10 -> false
// console.log(10<10)

// 123 ? '123' -> false
// console.log(123 === '123')

// 123 ? '123' -> true//
// console.log(123 == '123')

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// стрічка зі слів Сергія заражає все як вірус )) Виведе '205'

// document.write(str - a + "<br/>");
// Виведе 15 і приведе до числового значення

// document.write(str * "2" + "<br/>");
// виведе 40 і зробить числом

// document.write(str / 2 + "<br/>");
//виведе 20  і приведе до числового значення


// ****************************************************Class**********************************************

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let arr = []
// for (let i = 0; i < 10; i++) {
//     let num = (Math.floor(Math.random() * 10))
//     arr.push(num)
// }
// let result = 0
// for (const num of arr) {
//     result += num
// }
// console.log(arr)
// console.log(result)
// не розумію як можна викрористовуючи інфу з лекції це виконати, хібашо в ручну прописувати кожну цифру

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//     'title' : 'js for teapot',
//     'pages' : 200,
//     'genre': 'xxx'
// }

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     'title': 'js for teapot',
//     'pages': 200,
//     'genre': 'xxx',
//     'authors': [
//         {'firstName': 'Sasha', 'lastName': 'Voloshyn'},
//         {'firstName': 'Cat', 'lastName': 'Kokosovich'}
//     ]
// }

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books = [
//     {
//         'title': 'html',
//         'pages': 204,
//         'genre': 'web',
//         'authors': [
//             {'firstName': 'Sasha', 'lastName': 'Voloshyn'},
//             {'firstName': 'Cat', 'lastName': 'Kokosovich'}
//         ]
//     },
//     {
//         'title': 'css',
//         'pages': 165,
//         'genre': 'web',
//         'authors': [
//             {'firstName': 'Sergiy', 'lastName': 'Bos'},
//         ]
//     }
// ]
// console.log(books[0])
// console.log(books[1])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// let height = 23;
// let width = 19;
// let s = height * width
// console.log(s)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// let heightC = 10;
// let dC = 4;
// let v = Math.floor(Math.PI * Math.pow((dC / 2),2) * 10)
// console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2))
// console.log(k)