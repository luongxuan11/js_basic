let promise = new Promise((resolve, reject) =>
{
resolve('hello123456')
})
promise
.then((data) =>
{   
    console.log(data)
})


// ------------------------------------------------------------------------------
// const promiseExp = () =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         // resolve('succesuly!')
//         reject('something error!')
//     })
// }

// promiseExp()
//     .then(data =>
//         {
//             console.log(data)
//         })
//     .catch(error =>
//         {
//             console.log(error)
//         })
//     .finally(() =>
//     {
//         console.log('done!')
//     })