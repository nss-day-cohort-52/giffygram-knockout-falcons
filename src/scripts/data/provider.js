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

