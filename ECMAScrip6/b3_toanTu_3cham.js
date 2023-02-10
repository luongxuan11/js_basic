// destructuring // rest
let array = ['luong', 'truc', 'nhi']
let [a, ... rest] =  array;
console.log()

// đối với obj
let courses = {
    name: 'js',
    price: 1000
}

let result = {name, price} = courses;
console.log(result.name, result.price)