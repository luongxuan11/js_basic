// tương tự như contructor fuction ta có khái niệm class

//  với khái niệm contructor ta có synstax như sau

function Courses(name, id)
{
    this.name = name;
    this.id = id;
}
const course = new Courses('luong', 1)
console.log(course)

// đối với class

class students {
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }

}
let student = new students('luong', 2)
console.log(student)
