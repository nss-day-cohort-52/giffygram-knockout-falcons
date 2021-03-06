import { getFeed, setUserFilter, setYearFilter, toggleFavorites } from "../data/provider.js"
import { UserSelect } from "./UserSelect.js"
import { YearSelect } from "./YearSelect.js"


export const Footer = () => {
    let html = `
        <section class="footer__item">
        Posts Since 
            <select id="yearSelection">
            ${YearSelect()}
            </select>
            <span id="postCount"></span>
        </section>
        
        <section class="footer__item">
        Posts by user 
            <select id="userSelection">
            ${UserSelect()}
            </select>
        </section>

        <section class="footer__item">
        Show only favorites 
            <input id="showOnlyFavorites" type="checkbox"`
    const feed = getFeed()
    if (feed.displayFavorites) {
        html += ` checked></section>`
    } else {
        html += `></section>`
    }
    return html
}


const mainContainer = document.querySelector(".giffygram")

document.addEventListener("change", (event) => {
    if (event.target.id === "userSelection") {
        setUserFilter(parseInt(event.target.value))
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("change", (event) => {
    if (event.target.id === "showOnlyFavorites") {
        toggleFavorites()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("change", (event) => {
    if (event.target.id === "yearSelection") {
        setYearFilter(parseInt(event.target.value))
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

