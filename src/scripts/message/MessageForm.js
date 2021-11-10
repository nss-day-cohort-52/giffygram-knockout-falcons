export const MessageForm = () => {
    let html = `
        <div>
        ${Recipent()}
        </div>
        <div>
            <label class="label" for="message-text">Letter</label>
            <textarea type="text" name="message-text" class="message-text">Write Your Message Here</textarea>
        </div>

        <button class="send-button" id="sendmessage">Send Message</button>
    `

    return html
}
export const Recipent = () => {
    // declare a var whos value is the result of the getRequests function
    const requests = getRequests()
    const plumbers = getPlumbers()
    const allCompletions = getCompletions()
    // delcare a function that returns each iteration of our request arrays .description and .id in html list format
    const convertRequestToListElement = (requestObj) => { //adding a select element to the list now to  be able to choose the plumber who completed the job.
        //TODO .find to find requestId inside the completions array. compare to requestobj.id value 
        const foundCompletionObj = allCompletions.find(completionObj => requestObj.id === completionObj.requestId)


        return `<li>
                    ${requestObj.description}
                    ${!!foundCompletionObj 
                        ? `The job was completed by ${plumbers.find(plumber => foundCompletionObj.plumberId === plumber.id ).name}` 
                        : `<select class="plumbers" id="plumbers">    
                            <option value="">Choose</option>
                        ${plumbers.map(plumber => {
            return `<option value="${requestObj.id}--${plumber.id}">${plumber.name}</option>`}).join("")} 
                        </select>`}
                            <button class="request__delete" id="request--${requestObj.id}">Delete</button>
                </li>`
    }
    // declare a var= html, whos value is an unorderlist of each iteration of our request array after using .map 
    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}
