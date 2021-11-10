const API = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")

const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
        },
    users: []
}
const mainContainer = document.querySelector("#container")

export const fetchUsers = () => {
    return fetch(`${API}/users`)
    .then(response => response.json())
    .then(
        (login) => {
            applicationState.users = login
        }
    )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}

export const sendRegistration = (userRegistration) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRegistration)
    }

    return fetch(`${API}/registrations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}