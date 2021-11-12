import { PostList } from "../feed/PostList.js"
import { MessageForm } from "../message/MessageForm.js"
import { userMessages } from "../data/provider.js"

export const NavBar = () => {
    const messagesArray = userMessages()
    const numberOfMessages = messagesArray.length
    return `
    <div class="navigation__item navigation__icon">
        <img src="../images/pb.png" alt="Giffygram icons" id="logo">
    </div>
    
    <div class"navigation__item navigation__name">Giffygram</div>
    <div class="navigation__item navigation__search"></div>

    <div class="navigator__item navigation__message">
        <img id="directMessageIcon" src="../images/fountain-pen.svg" alt="Direct message">
        <div id="directMessageCounter" class="notification__count">${numberOfMessages}</div>
    </div>

    <div class="nagivator__item navigation__logout">
        <button id="logout" class="fakeLink">Logout</button>
    </div>
    `
}


const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {

        localStorage.setItem("gg_user", null)
        mainContainer.dispatchEvent(new CustomEvent("closeDirectMessage"))
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {

        mainContainer.dispatchEvent(new CustomEvent("newDirectMessage"))

    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageCounter") {

        mainContainer.dispatchEvent(new CustomEvent("changeToDirectMessage"))
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logo") {

        mainContainer.dispatchEvent(new CustomEvent("homepage"))
    }
})