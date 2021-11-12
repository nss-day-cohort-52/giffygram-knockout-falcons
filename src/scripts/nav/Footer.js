import { setUserFilter } from "../data/provider.js"
import { UserSelect } from "./UserSelect.js"


export const Footer = () => {
    return `
        <section class="footer__item">
        Posts Since 
            <select id="yearSelection"></select>
            <span id="postCount">8</span>
        </section>
        
        <section class="footer__item">
        Posts by user 
            <select id="userSelection">
            ${UserSelect()}
            </select>
        </section>

        <section class="footer__item">
        Show only favorites 
            <input id="showOnlyFavorites" type="checkbox">
        </section>

    `
}


const mainContainer = document.querySelector(".giffygram")

document.addEventListener("change", (event) => {
    if (event.target.id === "userSelection") {
        setUserFilter(parseInt(event.target.value)) 
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})