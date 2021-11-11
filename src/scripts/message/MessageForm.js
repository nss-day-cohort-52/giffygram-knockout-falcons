

import { getUsers, saveMessage } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {

        const messageObj = {
            userId: parseInt(localStorage.getItem("gg_user")),
            recipientId: parseInt(document.querySelector("option[class='recipient']").value),
            message: document.querySelector("input[name='direct-Message']").value
        }

        saveMessage(messageObj)

        window.alert(`Message Sent`)
    }
})


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__cancel") {

    document.querySelector("option[class='recipient']").value = ""
    document.querySelector("input[name='direct-Message']").value =""
    
    }
})



export const MessageForm = () => {
    let html = `
    <h3>Direct Message</h3>
        <div class= "message__inout">
         Recipient:
            ${Recipient()}
        </div>
        <div class= "message__input">
        Message:
            <label class="label" for="direct-Message"></label>
            <input type="text" name="direct-Message" class="input" />
        </div>

        <button id="directMessage__submit">Send Message</button>
        <button id="directMessage__cancel"">Cancel</button>
        <button id="directMessage__close">X</button>
    `

    return html
}



const Recipient = () => {
    // declare a var whos value is the result of the getRecipients function
    const recipients = getUsers()
    let html = ""
    html += "<select id='recipient-Dropdown'>"
    html += '<option  name="recipient" value="0" selected>Select a Recipient</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfRecipients = recipients.map((recipient) => {

        return `<option class="recipient" value="${recipient.id}">${recipient.name}</option>`
        }
    )
    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}
