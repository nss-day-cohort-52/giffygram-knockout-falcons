import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"
import { MessageForm } from "./message/MessageForm.js"
import { Footer } from "./nav/Footer.js"




let messageForm = false

export const GiffyGram = () => {
    // Show main main UI
    if (messageForm === false) {
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
    "homepage",
    customEvent => {
        messageForm = false
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)


