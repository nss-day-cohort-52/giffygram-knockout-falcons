


export const PostForm = () => {
    return `
    <section class="post-form">
        <div class="field">
            <textarea id="title" name="title" rows="1" cols="50">Title</textarea>
        </div>
        <div class="field">
            <textarea id="url" name="url" rows="1" cols="50">URL of gif</textarea>
        </div>
        <div class="field">
            <textarea id="caption" name="caption" rows="3" cols="50">Story behind your gif...</textarea>
        </div>

        <button type="button" id="savePost">Save</button>
        <button type="button" id="cancelPost">Cancel</button>

    </section>
    `
}