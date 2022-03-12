// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         let postsBlock = document.createElement('div');
//         postsBlock.classList.add('posts')
//
//         posts.forEach(post => {
//             let postBlock = document.createElement('div');
//             postBlock.classList.add('post')
//
//             let postTitleBlock = document.createElement('div');
//             postTitleBlock.innerText = `title - ${post.title}`
//             postTitleBlock.classList.add('post_title')
//             let postBodyBlock = document.createElement('div');
//             postBodyBlock.innerText = `body - ${post.body}`
//             postBodyBlock.classList.add('post_body')
//
//             postBlock.append(postTitleBlock, postBodyBlock)
//             postsBlock.appendChild(postBlock)
//         })
//         document.body.appendChild(postsBlock)
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments => {
//         let commentsBlock = document.createElement('div');
//
//         comments.forEach(comment => {
//             let commentBlock = document.createElement('div');
//
//             let postIdBlock = document.createElement('div');
//             postIdBlock.innerText = `PostId - ${comment.postId}`
//             let idBlock = document.createElement('div');
//             idBlock.innerText = `Id - ${comment.id}`
//             let nameBlock = document.createElement('h3');
//             nameBlock.innerText = `Comment name: ${comment.name}`
//             let emailBlock = document.createElement('div');
//             emailBlock.innerText = `Email - ${comment.email}`
//             let bodyBlock = document.createElement('p');
//             bodyBlock.innerText = `Body - ${comment.body}`
//             let hrBlock = document.createElement('hr');
//
//             commentBlock.append(postIdBlock, idBlock, nameBlock, emailBlock, bodyBlock,hrBlock)
//             commentsBlock.appendChild(commentBlock)
//         })
//         document.body.appendChild(commentsBlock)
//
//     })

// ***************************************************CLASS************************************************
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         let postsBlock = document.createElement('div');
//
//         posts.forEach(post => {
//             let postBlock = document.createElement('div');
//
//             let userIdBlock = document.createElement('div');
//             userIdBlock.innerText = `User Id - ${post.userId}`
//             let idBlock = document.createElement('div');
//             idBlohttps://jsonplaceholder.typicode.com/usersck.innerText = `Id - ${post.id}`
//             let titleBlock = document.createElement('div');
//             titleBlock.innerHTML = `<b>Title</b>: ${post.title}`
//             let bodyBlock = document.createElement('div');
//             bodyBlock.innerHTML = `<b>Body</b>: ${post.body}`
//             let commentsBlock = document.createElement('div');
//             let hr = document.createElement('hr');
//
//             let btn = document.createElement('button');
//             btn.innerText = 'Click'
//             btn.addEventListener('click', e => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`)
//                     .then(value => value.json())
//                     .then(comments => {
//                         commentsBlock.innerText = JSON.stringify(comments)
//                     })
//             })
//
//             postBlock.append(userIdBlock, idBlock, titleBlock, bodyBlock, btn, commentsBlock, hr)
//             postsBlock.appendChild(postBlock)
//         })
//         document.body.appendChild(postsBlock)
//     })

// ***************************************************Additional************************************************
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let usersBlock = document.createElement('div');

        users.forEach(user => {
            let userBlock = document.createElement('div');

            let idBlock = document.createElement('div');
            idBlock.innerText = `Id - ${user.id}`
            let nameBlock = document.createElement('div')
            nameBlock.innerText = `Name ${user.name}`
            let emailBlock = document.createElement('div')
            emailBlock.innerText = `Name ${user.email}`
            let hr = document.createElement('hr');
            let postsBlock = document.createElement('div')

            let showPostsBtn = document.createElement('button');
            showPostsBtn.innerText = 'Show posts'
            showPostsBtn.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        posts.forEach(post => {
                            let postBlock = document.createElement('div');

                            let userIdOfPostBlock = document.createElement('div');
                            userIdOfPostBlock.innerText = `User id ${post.userId}`
                            let postIdBlock = document.createElement('div');
                            postIdBlock.innerText = `Post id ${post.id}`
                            let postTitleBlock = document.createElement('div');
                            postTitleBlock.innerText = post.title
                            let commentsBlock = document.createElement('div')
                            let hrInPost = document.createElement('hr');

                            let showCommentsBtn = document.createElement('button')
                            showCommentsBtn.innerText = 'Show comments'
                            showCommentsBtn.addEventListener('click', () => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(value => value.json())
                                    .then(comments => {
                                        comments.forEach(comment =>{
                                            let commentBlock = document.createElement('div')

                                            let commentEmailBlock = document.createElement('div');
                                            commentEmailBlock.innerText = comment.email
                                            let commentBodyBlock = document.createElement('p')
                                            commentBodyBlock.innerText = comment.body
                                            let hr = document.createElement('hr');

                                            commentBlock.append(commentEmailBlock,commentBodyBlock,hr)
                                            commentsBlock.appendChild(commentBlock)
                                        })
                                    })
                            })

                            postBlock.append(userIdOfPostBlock, postIdBlock, postTitleBlock, showCommentsBtn, commentsBlock, hrInPost)
                            postsBlock.appendChild(postBlock)
                        })
                    })
            })

            userBlock.append(idBlock, nameBlock, emailBlock, showPostsBtn, postsBlock, hr)
            usersBlock.appendChild(userBlock)
        })
        document.body.appendChild(usersBlock)
    })
