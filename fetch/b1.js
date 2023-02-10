let data = " http://localhost:3000/courses"
fetch(data)
.then((data) =>
{
    return data.json()
})
.then((data) =>
{
    let result = data.map((title) =>
    {
        return `<li>
        <h2>${title.name}</h2>
        <p>${title.desc}</p>  
        </li>`
    })
    document.querySelector('.box').innerHTML = result.join('')
})