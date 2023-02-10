// lý thuyết và cách hoạt động của promise
let promise = new Promise((resolve, reject) => {
    resolve()
})

    .then(() => {
        return 1;           // thằng thứ nhất return gì
    })
    .then((data) => {
        console.log(data)           // thằng thứ 2 sẽ nhận được nó.
        return 2
    })
    .then((data) => {
        console.log(data)
        return "finish"
    })
    .then((data) => {
        console.log(data)
    })


// exp 2
let promise1 = new Promise((resolve, reject) => {
    resolve()
})
    .then(() => {
        return new Promise((resolve) =>    // nếu như return lại 1 promise
        {
            setTimeout(() => {
                resolve([1, 2, 3, 4])
            }, 3000)       // thì phải đợi sử lý xong promise đó mới tiếp tục xử lý tiếp
        })
    })
    .then((data) => {
        console.log('check>> ', data)
    })
    .finally(() => {
        console.log('done')
    })

// exp3:

let sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(() => {
        console.log('sleep')
        return sleep(1000)
    })
    .then(() => {
        console.log('sleep2')
        return sleep(3000)
    })
    .then(() => {
        console.log('finish all')
    })

    // exp 4

    let nothell = (value) =>
    {
        return new Promise((resolve) =>
        {
            resolve(value)
        })
    }
    nothell(1)
    .then((value) =>
    {
        return value + 1
    })
    .then((value) =>
    {
        return value + 1
    })
    .then((value) =>
    {
        return value + 1
    })
    .then((value) =>
    {
        console.log(">>check value: ",value)
    })