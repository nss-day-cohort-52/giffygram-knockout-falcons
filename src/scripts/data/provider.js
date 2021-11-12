const API = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")

const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    likes: [],
    posts: [],
    messages: [],
    follows: []
}

const mainContainer = document.querySelector(".giffygram")

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (login) => {
                applicationState.users = login
            }
        )
}

export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                applicationState.posts = posts
            }
        )
}

export const fetchLikes = () => {
    return fetch(`${API}/likes`)
        .then(response => response.json())
        .then(
            (likes) => {
                applicationState.likes = likes
            }
        )
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                applicationState.messages = messages
            }
        )
}

export const fetchFollows = () => {
    return fetch(`${API}/follows`)
        .then(response => response.json())
        .then(
            (follows) => {
                applicationState.follows = follows
            }
        )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}

export const getLikes = () => {
    return applicationState.likes.map(like => ({ ...like }))
}

export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}

export const getFollows = () => {
    return applicationState.follows.map(follow => ({ ...follow }))
}

export const savePost = (postObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    }
    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const saveMessage = (messageObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    }
    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            window.alert(`Message Sent`)
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const saveLike = (likeObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(likeObj)
    }
    return fetch(`${API}/likes`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const deletePost = (id) => {
    return fetch(`${API}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
export const deleteLike = (id) => {
    return fetch(`${API}/likes/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const sendRegistration = (userRegistration) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userRegistration)
    }

    return fetch(`${API}/users`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const updateMessages = (messageObj) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    }

    return fetch(`${API}/messages/${messageObj.id}`, fetchOptions)
    .then(response => response.json())
    
}

export const getFeed = () => {
    return applicationState.feed
}

export const setUserFilter = (id) => {
    if (id > 0) {
        applicationState.feed.chosenUser = id
    } else if (id === 0) {
        applicationState.feed.chosenUser = null
    }
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

}

export const toggleFavorites = () => {

    if (applicationState.feed.displayFavorites) {
        applicationState.feed.displayFavorites = false
    } else {
        applicationState.feed.displayFavorites = true
    }
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

}

export const setYearFilter = (value) => {
    applicationState.feed.chosenYear = value
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

}


// checkout this code 
export const userMessages = () => {
    const messages = getMessages()
    // display an array of only messages that match gg_user (filter)
    const currentUser = parseInt(localStorage.getItem("gg_user"))
    const messageFilterFunction = (messageobj) => {

        if (messageobj.recipientId === currentUser && messageobj.read === false){
        return messageobj

        }
    }

    const filteredArrayMessages = messages.filter(messageFilterFunction)
    return filteredArrayMessages
}