let display = (log) =>
{
    if(log === undefined)
    {
        console.log('parameter default value')
    }
    else{
        console.log(log)
    }
}
display()

// ở ES6 sẽ cung cấp cho bạn 1 syntax

let hello = (log = 'gia tri mac dinh') =>
{
    console.log(log)
}
hello()  // khi tham số để trống thì sẽ hiểu đó là giá trị mặc định