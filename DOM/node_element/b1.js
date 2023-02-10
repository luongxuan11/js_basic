// document.write('get elements method')

let heading = document.getElementById('first')
console.log({heading})  // dlấy ra thẻ h1 có id là first
  // sự khác nhau của việc dùng ngoặc arr và {} và k dùng

  // 2. get class name

  let clasname = document.getElementsByClassName('clas1')
  console.log(clasname)

  // 3. get element dang css querySelector

  let headingname = document.querySelector('.clas2')
  console.log(headingname)

  // trường hợp phức tạp hơn

  let getBox = document.querySelector('.box .theP')
  console.log(getBox)

  let getarr = document.getElementsByClassName('arr')
  // lưu ý colection chỉ giống arr nhưng k dùng method của arr được
