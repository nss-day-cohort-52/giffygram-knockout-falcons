

import { getUsers } from "../data/provider.js"


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
    `

    return html
}
const Recipient = () => {
    // declare a var whos value is the result of the getRecipients function
    const recipients = getUsers()
    let html = ""
    html += "<select id='recipient-Dropdown'>"
    html += '<option name="recipient" value="0">Select a Recipient</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfRecipients = recipients.map((recipient) => {

        return `<option value="${recipient.id}" selected>${recipient.name}</option>`
        }
    )
    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}
