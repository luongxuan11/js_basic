let courses = 
[
    {name: 'javascrip', price: 0, isFinish: true},
    {name: 'php', price: 400, isFinish: false},
    {name: 'ryby', price:200, isFinish: true }
];

let free = courses.every((course, index, aray) =>
{
    console.log(index)
    return course.price ===0
})
console.log(free)
// định nghĩa là tất cả 
// câu lệnh ở trên nếu như course.price === 0 thì in ra true 
// nhưng nó sẽ dừng lại khi 1 giá trị khác 0