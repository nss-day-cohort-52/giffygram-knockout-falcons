

import { getUsers, saveMessage } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send-message") {

        const messageObj = {
            userId: parseInt(localStorage.getItem("gg_user")),
            recipientId: parseInt(document.querySelector("option#recipient").value),
            message: document.querySelector("input[name='direct-Message']").value
        }

        saveMessage(messageObj)
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancel-message") {

    document.querySelector("option#recipient").value = ""
    document.querySelector("input[name='direct-Message']").value =""
    
    }
})



export const MessageForm = () => {
    let html = `
        <div class= "directMessage">
            ${Recipient()}
        </div>
        <div class= "directMessage">
            <label class="label" for="direct-Message">Write Message Here</label>
            <input type="text" name="direct-Message" class="input" />
        </div>

        <button class="send-button" id="send-message">Send Message</button>
        <button class="cancel-button" id="cancel-message">Cancel</button>
    `

    return html
}



const Recipient = () => {
    // declare a var whos value is the result of the getRecipients function
    const recipients = getUsers()
    let html = ""
    html += "<select id='recipient-Dropdown'>"
    html += '<option id="recipient" name="recipient" value="0">Select a Recipient</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfRecipients = recipients.map((recipient) => {

        return `<option id="recipient--${recipient.id}"value="${recipient.id}" selected>${recipient.name}</option>`
        }
    )
    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}
