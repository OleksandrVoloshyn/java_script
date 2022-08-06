const wakeUp = (isTired, cb) => {
    console.log('Проснувся')
    setTimeout(() => {
        isTired ? cb('Сидиш дома нема сили', null) : cb(null, 'Ранкова рутина')
    }, 500)
}

const goToWork = (hasJob, cb) => {
    setTimeout(() => {
        hasJob ? cb(null, 'Воркаю') : cb('Немає роботи вмер з голоду')
    }, 1000)
}

const getSalary = (isEndOfMonth, cb) => {
    console.log('Кінець робочого дня')
    setTimeout(() => {
        isEndOfMonth ? cb(null, 'Получаю зп') : cb('Нема бабок, йду додому')
    }, 500)
}

const hangOut = (hasFight, cb) => {
    console.log('Тусуюсь')
    setTimeout(() => {
        if (hasFight) {
            console.log('Намічажться замєс')
            cb('Получив тягла йду додому спати')
        } else {
            cb(null, 'З довольним лицей йду додому спати')
        }
    }, 1000)
}

wakeUp(false, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)

        goToWork(true, (err, data) => {
            if (err) {
                console.error(err)
                return;
            }
            console.log(data)

            getSalary(true, (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Ураааа')
                    console.log(data)

                    hangOut(false, (err, data) => {
                        if (err) {
                            console.log(err)
                            console.log('Ліг спати')
                        } else {
                            console.log(data)
                            console.log('Ліг довольний спати')
                        }
                    })
                }
            })

        })
    }
})

// ******************************************************Promise***********************************************************
//
// const wakeUp = (isTired) => {
//     return new Promise((resolve, reject) => {
//         console.log('Проснувся')
//         setTimeout(() => {
//             if (isTired) {
//                 reject('Нема сили сиди вдома')
//             } else {
//                 resolve('Ранкова рутина')
//             }
//         }, 500)
//     })
// }
//
// const goToWork = (hasJob) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hasJob) {
//                 resolve('Заробляю касу')
//             } else {
//                 reject('Немає шо їсти(( RIP')
//             }
//         }, 1000)
//     })
// }
//
// const getSalary = (isEndOfMonth) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isEndOfMonth) {
//                 resolve('Отримав зп')
//             } else {
//                 reject('Немає грошей')
//             }
//         }, 1000)
//     })
// }
//
// const hangOut = (hasFight) => {
//     return new Promise((resolve, reject) => {
//         console.log('тусуюсь..')
//         setTimeout(() => {
//             if (hasFight) {
//                 console.log('Намічається драка')
//                 reject('Получив тягла')
//             } else {
//                 resolve('Іду додом')
//             }
//         }, 1000)
//     })
//
// }
//
// wakeUp(false)
//     .then(value => {
//         console.log(value)
//         return goToWork(true)
//     })
//     .then(value => {
//         console.log('Іду на роботу')
//         console.log(value)
//         return getSalary(true)
//     })
//     .then(value => {
//         console.log(value)
//         return hangOut(false)
//     })
//     .then(value => {
//         console.log(value)
//         console.log('Лягаю спати')
//     })
//     .catch(reason => console.error(reason))