let users = [
    {
        id: 1,
        name: "luong",
        addr: "thanh hoa"
    },
    {
        id: 2,
        name: "hoai",
        addr: "hanoi"
    },
    {
        id: 3,
        name: "hanh",
        addr: "hanoi"
    }
]

let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'hey! di nhau khong'
    },
    {
        id: 2,
        user_id: 2,
        content: 'ok'
    }
]

let getcomments = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments)
        }, 1000)
    })
}
let getUsers = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = users.filter((user) => {
                return userId.includes(user.id)
            })
            resolve(result)
        }, 1000)
    })
}
getcomments()
    .then((data) => {
        let userId = data.map((comment) => {
            return comment.user_id
        })

        return getUsers(userId)
            .then((users) => {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
.then((data) =>
{
    console.log(data)
})