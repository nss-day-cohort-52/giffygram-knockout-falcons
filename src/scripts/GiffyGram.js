import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"
import { MessageForm } from "./message/MessageForm.js"
import { DirectMessages } from "./friends/DirectMessage.js"
import { Footer } from "./nav/Footer.js"
import { AuthorProfile } from "./AuthorProfile.js"
import { getProfileId } from "./data/provider.js"


let profile = false
let messageForm = false
let directMessagePage = false

export const GiffyGram = () => {
    // Show main main UI
    if (profile && messageForm) {
        const chosenUser = getProfileId()
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="directMessage">${MessageForm()}</section>
        <section class="userProfile">${AuthorProfile(chosenUser)}</section>
        <footer class="footer>Footer</footer>
        `
    } else if (profile) {
        const chosenUser = getProfileId()
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="empty"></section>
        <section class="userProfile">${AuthorProfile(chosenUser)}</section>
        <footer class="footer>Footer</footer>
        `
    } else if (directMessagePage && messageForm) {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="directMessage">${MessageForm()}</section>
        <section class="giffygram__feed">${DirectMessages()}</section>
        <footer class="footer>Footer</footer>
        `
    } else if (directMessagePage === true) {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="empty"></section>
        <section class="giffygram__feed">${DirectMessages()}</section>
        <footer class="footer>Footer</footer>
        `
    } else if (messageForm) {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="directMessage">${MessageForm()}</section>
        <section class="giffygram__feed">${PostList()}</section>
        <footer class="footer">${Footer()}</footer>
        `
    } else {
        return `
        <nav class="navigation">${NavBar()}</nav>
        <section class="empty"></section>
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
        profile = false
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

applicationElement.addEventListener(
    "homepage",
    customEvent => {
        directMessagePage = false
        messageForm = false
        profile = false
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

applicationElement.addEventListener(
    "profile",
    customEvent => {
        directMessagePage = false
        messageForm = false
        profile = true

        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))

    }
)

