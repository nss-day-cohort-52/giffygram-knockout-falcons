import { deleteLike, deletePost, getFeed, getLikes, getPosts, getUsers, saveLike } from "../data/provider.js"
import { PostGif } from "./PostForm.js"

const PostBuilder = (postObj) => {
    const timestamp = postObj.timestamp
    const date = new Date(timestamp)
    const dateString = date.toLocaleDateString()
    const users = getUsers()
    const foundUser = users.find(
        (user) => {
            return user.id === postObj.userId
        }
    )
    let html = ""
    html += `
        <section class="post">
        <header><h2 class="post__title">${postObj.title}</h2></header>
        <img class="post__image" src="${postObj.url}">
        <section class="post__description">${postObj.description}</section>
        <section class="post__tagline">Posted by ${foundUser.name} on ${dateString}</section>
        <section class="post__actions">`

    //check if postObj.id match a likeObj.postId
    const likes = getLikes()
    const foundLike = likes.find(
        (likeObj) => {
            return (likeObj.postId === postObj.id && likeObj.userId === parseInt(localStorage.getItem("gg_user")))
        }
    )

    if (foundLike) {
        html += `<div class="star-icon"><img id="favoritePost--${postObj.id}" class="actionIcon" src="../images/favorite-star-yellow.svg"></div>`
    } else {
        html += `<div class="star-icon"><img id="favoritePost--${postObj.id}" class="actionIcon" src="../images/favorite-star-blank.svg"></div>`
    }

    if (postObj.userId === parseInt(localStorage.getItem("gg_user"))) {
        html += `<div class="trash-icon"><img id="deletePost--${postObj.id}" class="actionIcon" src="../images/block.svg"></div>`
    }

    html += `</section>
    </section>`
    return html
}

export const PostList = () => {
    const feed = getFeed()

    const posts = getPosts()
    const allPosts = posts.reverse()
    
    const userSortedPosts = allPosts.filter(
        (post) => {
            return (post.userId === feed.chosenUser)
        }
    )
    let html = `<section class="miniMod">${PostGif()}</section>`

    const favoritePosts = []
    
    allPosts.forEach(
        (post) => {
            const likes = getLikes()
            const foundLike = likes.find(
            (like) => {
                return (like.postId ===post.id && like.userId === parseInt(localStorage.getItem("gg_user")))
                }
            )
            if (foundLike) {
                favoritePosts.push(post)

            }
        }
    )

    const yearSortedPosts = []
    allPosts.forEach(
        (post) => {
            const postYear = new Date(post.timestamp).getFullYear()
            if(postYear >= feed.chosenYear) {
                yearSortedPosts.push(post)
            }
        }
    )

    if (feed.displayFavorites) {
        const favoriteListItems = favoritePosts.map(PostBuilder)
        html += favoriteListItems.join("")
    } else if (feed.chosenUser) {
        const userListItems = userSortedPosts.map(PostBuilder)
        html += userListItems.join("")
    } else if (feed.chosenYear) {
        const yearListItems = yearSortedPosts.map(PostBuilder)
        html += yearListItems.join("")       
    }else {

        const postListItems = allPosts.map(PostBuilder)
        html += postListItems.join("")
    }

    return html
}


const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    //check if id starts with
    if (clickEvent.target.id.startsWith("favoritePost--")) {
        //split at -- to grab postId
        const [, postId] = clickEvent.target.id.split("--")
        const posts = getPosts()
        const foundPost = posts.find(
            (postObj) => {
                return postObj.id === parseInt(postId)
            }
        )
        const likes = getLikes()
        const foundLike = likes.find(
            (likeObj) => {
                return likeObj.postId === foundPost.id && likeObj.userId === parseInt(localStorage.getItem("gg_user"))
            }
        )

        if (foundLike && foundLike.userId === parseInt(localStorage.getItem("gg_user"))) {
            deleteLike(foundLike.id)

        } else {
            
            const likeObj = {
                userId: parseInt(localStorage.getItem("gg_user")),
                postId: parseInt(postId)
            }
    
            saveLike(likeObj)
        }

    }
})

mainContainer.addEventListener("click", clickEvent => {
    //check if id starts with
    if (clickEvent.target.id.startsWith("deletePost--")) {
        //split at -- to grab postId
        const [, postId] = clickEvent.target.id.split("--")

        deletePost(parseInt(postId))

    }
})
