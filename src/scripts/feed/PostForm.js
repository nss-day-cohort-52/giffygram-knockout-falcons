


export const PostForm = () => {
    return `
    <section class="post-form">
        <div class="field">
            <textarea id="title" name="title" placeholder="Title" rows="1" cols="50">Title</textarea>
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