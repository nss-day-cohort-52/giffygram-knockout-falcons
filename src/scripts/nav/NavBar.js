

export const NavBar = () => {
    return `
    <nav class="navigation">

    <div class="navigation__item navigation__icon">
        <img src="../images/pb.png" alt="Giffygram icons" id="logo">
    </div>
    
    <div class"navigation__item navigation__name">Giffygram</div>
    <div class="navigation__item navigation__search"></div>

    <div class="navigator__item navigation__message">
        <img id="directMessageIcon" src="../images/fountain-pen.svg" alt+'Direct message">
        <div class="notification__count">0</div>
    </div>

    <div class="nagivator__item navigation__logout">
        <button id="logout" class="fakeLink">Logout</button>
    </div>
    </nav>
    `
}


const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logout") {

        localStorage.setItem("gg_user", null)
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})