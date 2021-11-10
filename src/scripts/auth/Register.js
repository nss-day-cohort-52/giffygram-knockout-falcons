
export const registerUser = () => {
    let html = `
    <div class="field">
    <label class="label" for="userName">Name</label>
    <input type="text" name="userName" class="input" />
    </div>
    <div class="field">
    <label class="label" for="userEmail">Email</label>
    <input type="text" name="userEmails" class="input" />
    </div>
    <div class="field>
    <label class="label" for="userPassword>Password</label>
    input type="text" name="userPassword" class="input" />
    </div>

    <button class="button" id="registerUser">Register</button>
    <button class="button" id="cancel">Cancel</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerUser") {
        const userName = document.querySelector("input[name='userName']").value
        const userEmail = document.querySelector("input[name='userEmail']").value
        const userPassword = document.querySelector("input[name='password']").value
        
        const dataToSendToAPI = {
            name: userName,
            email: userEmail,
            password: userPassword
        }

        sendRegistration(dataToSendToAPI)
}
})

export const registerUser = () => {
    return `
        <div class="registerForm">
            <form>
                <fieldset>
                    <label for=
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        </div>
    `
}
