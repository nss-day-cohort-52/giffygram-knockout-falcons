import { sendRegistration } from "../data/provider.js"

export const registerUser = () => {
    let html = `
    <div class="field">
    <label class="label" for="userName">Name</label>
    <input type="text" name="userName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="userEmail">Email</label>
    <input type="text" name="userEmail" class="input" />
    </div>
    <div class="field>
    <label class="label" for="userPassword">Password</label>
    <input type="text" name="userPassword" class="input" />
    </div>

    <button class="button" id="registerUser">Register</button>
    <button class="button" id="cancel">Cancel</button>
    `
    return html
}

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerUser") {
        const userName = document.querySelector("input[name='userName']").value
        const userEmail = document.querySelector("input[name='userEmail']").value
        const userPassword = document.querySelector("input[name='userPassword']").value

        const dataToSendToAPI = {
            name: userName,
            email: userEmail,
            password: userPassword
        }

        sendRegistration(dataToSendToAPI)
    }
})