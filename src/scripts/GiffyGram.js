import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"
import { MessageForm } from "./message/MessageForm.js"
import { DirectMessages } from "./friends/DirectMessage.js"
import { Footer } from "./nav/Footer.js"



let messageForm = false
let directMessagePage = false
export const GiffyGram = () => {
    // Show main main UI
    if(directMessagePage === true) {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="empty"></section>
        <section class="giffygram__feed">${DirectMessages()}</section>
        <footer class="footer>Footer</footer>
        `
    } else if (messageForm === false) {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="empty"></section>
        <section class="giffygram__feed">${PostList()}</section>
        <footer class="footer">${Footer()}</footer>
        `
    } else {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="directMessage">${MessageForm()}</section>
        <section class="giffygram__feed">${PostList()}</section>
        <footer class="footer">${Footer()}</footer>

        `
    }

}


const applicationElement = document.querySelector(".giffygram")
applicationElement.addEventListener(
    "newDirectMessage",
    customEvent => {
        messageForm = true
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

applicationElement.addEventListener(
    "closeDirectMessage",
    customEvent => {
        messageForm = false
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

applicationElement.addEventListener(
    "changeToDirectMessage",
    customEvent => {
        directMessagePage = true
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

applicationElement.addEventListener(
    "homepage",
    customEvent => {
        messageForm = false
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

