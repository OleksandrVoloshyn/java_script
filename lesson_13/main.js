const wakeUp = (isTired, cb) => {
    console.log('Проснувся')
    setTimeout(() => {
        if (isTired) {
            cb('Сидиш дома нема сили', null)
        } else {
            cb(null, 'Ранкова рутина')
        }
    }, 500)
}

const goToWork = (hasJob, cb) => {
    setTimeout(() => {
        if (hasJob) {
            cb(null, 'Воркаю')
        } else {
            cb('Немає роботи вмер з голоду')
        }
    }, 1000)
}

const getSalary = (isEndOfMonth, cb) => {
    console.log('Кінець робочого дня')
    setTimeout(() => {
        if (isEndOfMonth) {
            cb(null, 'Получаю зп')
        } else {
            cb('Нема бабок, йду додому')
        }
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
                console.log(err)
            } else {
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
            }
        })
    }
})
