let courses =
    [
        { name: 'javascrip', price: 0, isFinish: true },
        { name: 'php', price: 400, isFinish: false },
        { name: 'ryby', price: 200, isFinish: true },
        { name: 'ryby', price: 300, isFinish: true }
    ];

let result = courses.filter((course, index, array) => {
    return course.name === 'ryby'
})
console.log(result.name)

// filter có thể tìm tất cả các điều kiện thỏa mãn thay vì tìm một cái như find
