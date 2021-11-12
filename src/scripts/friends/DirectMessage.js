import { updateMessages, getUsers, userMessages } from '../data/provider.js'








export const DirectMessages = () => {
    const theUsersMessages = userMessages()
    const usersArray = getUsers()
    const fetchsForMessages = theUsersMessages.map(message => {
        message.read = true
        return updateMessages(message)

    })
    
    let html = ""
    html += "<div class='messageList'>"
    const arrayOfUserMessages = theUsersMessages.map((message) => {
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
    html += arrayOfUserMessages.reverse().join("")
    html += "</div>"
    Promise.all(fetchsForMessages)

    return html
}
