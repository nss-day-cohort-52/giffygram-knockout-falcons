import { getUsers } from "../data/provider.js"
import { registerUser } from "./Register.js"


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        if (email && password) {
            if (foundUser !== null) {
                localStorage.setItem("gg_user", foundUser.id)
                document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
            } else {
                window.alert(`Info does not match any registered users.`)
            }
        } else {
            window.alert(`Please fill out all fields completely.`)
        }

    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerButton") {
        document.querySelector(".registrationForm").innerHTML=registerUser()
    }
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
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
            <button id="registerButton">RegisterUser</button>
        </div>
        <div class="registrationForm"></div>
    `
    
}
