let courses = [
    {
        id: 1,
        name: 'javascript',
        price: 200
    },
    {
        id: 2,
        name: 'c++',
        price: 250
    },
    {
        id: 3,
        name: 'ruby',
        price: 300
    },
    {
        id: 4,
        name: 'java',
        price: 400
    }
]

let newcourses = courses.map((course, index, array) =>
{
    return {
        id: course.id,
        name: `khoa hoc: ${course.name}`,
        price: course.price,
        hour: `12h`, // thêm item mới và không ảnh hưởng đến mảng cũ
        index: index,
    }
})
console.log(newcourses)

// console.log(courses)



