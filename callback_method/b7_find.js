let courses = 
[
    {name: 'javascrip', price: 0, isFinish: true},
    {name: 'php', price: 400, isFinish: false},
    {name: 'ryby', price:200, isFinish: true }
];

let result = courses.find((course, index) =>
{
    return course.name === 'php'
})
console.log(result)

// tìm đến phần tử nào có giá trị bằng và lấy ra 1 mảng
// ta có thể chấm với key để lấy ra từng item trong ojb đã lấy

console.log(`check:`,result.price)