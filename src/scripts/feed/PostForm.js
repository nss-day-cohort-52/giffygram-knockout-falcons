import { savePost } from "../data/provider.js"



export const PostForm = () => {
    return `
    <section class="post-form">
        <div class="field">
            <textarea id="title" name="title" placeholder="Title" rows="1" cols="50"></textarea>
        </div>
        <div class="field">
            <textarea id="url" name="url" placeholder="URL of gif" rows="1" cols="50"></textarea>
        </div>
        <div class="field">
            <textarea id="caption" name="caption" placeholder="Story behind your gif..." rows="3" cols="50"></textarea>
        </div>

        <button type="button" id="savePost">Save</button>
        <button type="button" id="cancelPost">Cancel</button>

    </section>
    `
}

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "savePost") {

        const postObj = {
            userId: parseInt(localStorage.getItem("gg_user")),
            title: document.querySelector("textarea[name='title']").value,
            url: document.querySelector("textarea[name='url']").value,
            description: document.querySelector("textarea[name='caption']").value,
            timestamp: Date.now()
        }

        savePost(postObj)
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelPost") {

        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))


    }
})