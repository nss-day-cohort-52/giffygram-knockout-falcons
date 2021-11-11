import { savePost } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const PostGif = () => {
    return `
    <section class="post-gif">
    <section class="miniMode" id="post-gif">Have a gif to post?</section>
    </section>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "post-gif") {
        document.querySelector(".post-gif").innerHTML = PostForm()
    }

})

const PostForm = () => {
    return `
    <section class="newPost">
        <div class="field">
            <textarea class="newPost__input" id="title" name="title" placeholder="Title" rows="1" cols="50"></textarea>
        </div>
        <div class="field">
            <textarea class="newPost__input" id="url" name="url" placeholder="URL of gif" rows="1" cols="50"></textarea>
        </div>
        <div class="field">
            <textarea class="newPost__description" id="caption" name="caption" placeholder="Story behind your gif..." rows="3" cols="50"></textarea>
        </div>

        <button type="button" id="savePost">Post</button>
        <button type="button" id="cancelPost">Cancel</button>

    </section>
    `
}


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePost") {

        const postObj = {
            userId: parseInt(localStorage.getItem("gg_user")),
            title: document.querySelector("textarea[name='title']").value,
            url: document.querySelector("textarea[name='url']").value,
            description: document.querySelector("textarea[name='caption']").value,
            timestamp: Date.now()
        }

        if (postObj.title && postObj.url && postObj.description) {
            savePost(postObj)
        
        } else {
            window.alert(`Please fill out all fields completely`)
        }
     
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelPost") {

        // localStorage.setItem("gg_user", null)
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})