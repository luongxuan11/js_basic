setTimeout(() => {
    console.log('nha')
}, 0)
console.log('hello')
//                  <----- callback hell ------->
setTimeout(() => {
    console.log('viec1')
    setTimeout(() => {
        console.log('viec2')
        setTimeout(() => {
            console.log('viec3')
            setTimeout(() => {
                console.log('viec4')
                setTimeout(() => {
                    console.log('viec5')
                    setTimeout(() => {
                        console.log('viec6')
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
            setTimeout(() =>{
                console.log(4)
            },1000)
        }, 1000)
    }, 1000)
}, 1000)