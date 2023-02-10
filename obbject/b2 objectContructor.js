// để tạo một bản constructor ta cần làm như sau
function User(firstName, lastName, fullName, addr, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = fullName              // this ở đây là User 
    this.addr = addr                      // .firstName thì sẽ bằng firstName khi khởi tạo
    this.email = email
                            // để thêm 1 phuowng thuwc mới không có trong bảng constructor
    this.getFullname = function()
    {
        return `${firstName} ${lastName}`
    }
}
// thêm user bằng cách
let luong = new User('bui', "Luong", 'bui luong', 19, "builuong@gmail.com")
console.log(luong)
console.log(luong.constructor === User)  // cú pháp check 2 bản
luong.crust = 'khong co'                // thêm key mới
console.log(">> check >>>>>>",luong.getFullname())



//  tiếp theo là object prototype 

// để thêm 1 thuộc tính mới vào constructor 
User.prototype.className = "luong hoc lap trinh"
console.log(luong.className)
// theem 1 phuong thuc moi
User.prototype.getClassName = function() {
    return `${this.lastName} ${this.className}`
}
console.log("propoty", luong.getClassName())