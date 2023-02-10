let promise = new Promise((resolve) => {
    return setTimeout(() => {
        resolve([1])
    }, 1000)
})

let promise1 = new Promise((resolve) => {
    return setTimeout(() => {
        resolve([2, 3])
    }, 5000)
})

Promise.all([promise, promise1])
    .then(([value, value1]) => {
        console.log(value.concat(value1))
    })
// promise all