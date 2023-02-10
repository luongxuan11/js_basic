//  VÒNG LẶP - LOOP

// 1. for - Lặp với điều kiện đúng
// 2. for/in - Lặp qua key của đối tượng
// 3. for/of - Lặp qua value của đối tượng
// 4. while - Lặp khi điều kiện đúng
// 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

function run(object) {
    let arr = []
    for(let key in object)
    {
        arr.push(`thuoc tinh ${key} co gia tri ${object[key]}`)
    }
    return arr
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// for of nhanh hơn trong mảng và string. for in thì cần arr[index] còn for of chỉ cần index thôi
