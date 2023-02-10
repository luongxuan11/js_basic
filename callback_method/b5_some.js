let courses = 
[
    {name: 'javascrip', price: 200, isFinish: true},
    {name: 'php', price: 400, isFinish: false},
    {name: 'ryby', price:200, isFinish: true }
];
let result = courses.some((course, index, arr) =>
{
    console.log(index)
    return course.name == "javascrip";
})
console.log(result)
