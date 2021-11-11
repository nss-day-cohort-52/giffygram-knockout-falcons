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
    html += "<div id='messageList'>"
    const arrayOfUserMessages = userMessages.map((message) => {
        const foundSenderObj = usersArray.find(senderObj => message.userId === senderObj.id)
        
        return `
        <div class="user-message-name" id="message--${message.recipientId}" value="${message.recipientId}">From ${foundSenderObj.name}
        <div class="messageString">${message.message}</div>
        </div>
        `
        }
        )
        html += arrayOfUserMessages.join("")
        html += "</div>"
        return html
    }
