let courese =
    [
        {
            id: 1,
            name: 'javascript',
            price: 250
        },
        {
            id: 2,
            name: 'php',
            price: 300,
        },
        {
            id: 3,
            name: 'ruby',
            price: 450
        }

    ]

courese.forEach((course, index, arr) => {
    console.log(`>> check array: `, index, course.id)
})

    // forEach có 3 tham số đầu tiên course, thứ 2 là chỉ mục, thứ 3 là lấy cả chuỗi