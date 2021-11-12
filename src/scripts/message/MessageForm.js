

import { getUsers, saveMessage } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {

        const messageObj = {
            userId: parseInt(localStorage.getItem("gg_user")),
            recipientId: parseInt(document.querySelector("select[id='recipient-Dropdown']").value),
            message: document.querySelector("input[name='direct-Message']").value,
            read: false
        }

        const text = document.querySelector("input[name='direct-Message']").value
        const name = document.querySelector("select[id='recipient-Dropdown']").value

        if (text && name !== "0") {
            saveMessage(messageObj)
        } else {
            window.alert(`Please fill out all fields completely.`)
        }


    }
})


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__cancel") {

        document.querySelector("select[id='recipient-Dropdown']").value = "0"
        document.querySelector("input[name='direct-Message']").value = ""

    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__close") {
        mainContainer.dispatchEvent(new CustomEvent("closeDirectMessage"))
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
    html += '<option  class="recipient" value="0">Select a Recipient</option>'
    //assigning selection options for the dropdown menu 
    const arrayOfRecipients = recipients.map((recipient) => {

        return `<option class="recipient" value="${recipient.id}">${recipient.name}</option>`
    }
    )
    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}
