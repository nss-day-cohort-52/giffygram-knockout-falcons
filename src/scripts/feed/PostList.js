import { getPosts, getUsers } from "../data/provider.js"
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
        <section class="post__actions">
        <div class="star-icon"><img id="favoritePost---${postObj.id}" class="actionIcon" src="../images/favorite-star-blank.svg"></div>
        `

    if (postObj.userId === parseInt(localStorage.getItem("gg_user"))) {
        html += `<div class="trash-icon"><img id="deletePost---${postObj.id}" class="actionIcon" src="../images/block.svg"></div>`
    }
    
    html += `</section>
    </section>`
    return html
}

export const PostList = () => {
    const posts = getPosts()
    let html = `
                <section class="miniMod">${PostGif()}</section>`

    const postListItems = posts.map(PostBuilder)
    html += postListItems.join("")
    return html

}

