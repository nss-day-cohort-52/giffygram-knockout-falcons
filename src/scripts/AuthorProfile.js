import { getMessages, getPosts, getUsers } from "./data/provider.js"


export const AuthorProfile = (id) => {
    const users = getUsers()
    const messages = getMessages()
    const posts = getPosts()

    const foundUser = users.find(
        (user) => {
            return user.id === id
        }
    )
    const userPosts = posts.filter(
        (post) => {
            return post.userId === id
        }
    )

    const userMessages = messages.filter(
        (message) => {
            if (message.userId === id || message.recipientId === id) {
                if (message.userId === parseInt(localStorage.getItem("gg_user")) || message.recipientId === parseInt(localStorage.getItem("gg_user")) )
                return message
            }
        }
    )


    let html = `<h1 class="profile__name">${foundUser.name}</h1>
    <section class="userPosts">${foundUser.name} Has Submitted <strong>${userPosts.length}</strong> Posts</section>
    <section class="userMessages">Messages Between You and ${foundUser.name}: `
    
    const messageBuilder = (message) => {
        
        const foundRecipient = users.find(
            (user) => {
                return user.id === message.recipientId
            }
        )

        const foundAuthor = users.find(
            (user) => {
                return user.id === message.userId
            }
        )

        return `
        <div class="message" id="message--${message.id}">
        <div class="message__recipient">Dear ${foundRecipient.name}</div>
        <div class="message__text"><em>${message.message}</em></div>
        <div class="message__from"> From: ${foundAuthor.name}</div>
        </div>
        `
    }
    const messagesListArray = userMessages.map(messageBuilder)

    html += messagesListArray.reverse().join("")
    html += `</section>`
    return html

}
