import { getMessages, getUsers } from '../data/provider.js'








export const DirectMessages = () => {
    const usersArray = getUsers()
    const messages = getMessages()
    // display an array of only messages that match gg_user (filter)
    const currentUser = parseInt(localStorage.getItem("gg_user"))
    const messageFilterFunction = (messageobj) => {
        if (messageobj.recipientId === currentUser)
        return messageobj
    }
    const userMessages = messages.filter(messageFilterFunction)
    

    let html = ""
    html += "<div class='messageList'>"
    const arrayOfUserMessages = userMessages.map((message) => {
        const foundSenderObj = usersArray.find(senderObj => message.userId === senderObj.id)

        return `
        <div class='message' id="message--${message.id}" >
        <div class="message__author" value="${message.recipientId}">
        From ${foundSenderObj.name}
        </div>
        <div class="message__text">
        ${message.message}
        </div>
        </div>
        `
    }
    )
    html += arrayOfUserMessages.join("")
    html += "</div>"
    return html
}
