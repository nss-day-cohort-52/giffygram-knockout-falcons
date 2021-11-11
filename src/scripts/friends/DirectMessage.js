import { getMessages, getUsers } from '../data/provider.js'









const DirectMessages = () => {
    const usersArray = getUsers()
    const messages = getMessages()
    // display an array of only messages that match gg_user (filter)
    const userMessages = messages.filter(messageFilterFunction())
    const currentUser = parseInt(localStorage.getItem("gg_user"))
    const messageFilterFunction = (message) =>

    let html = ""
    html += "<div id='messageList'>"
    const arrayOfMessages = messages.map((message) => {
        
        return `
        <div id="message--${message.recipientId}" value="${message.recipientId}">From the users name who sent message ${message.message}</div>
        `
        }
        )
        html += arrayOfMessages.join("")
        html += "</div>"
        return html
    }







    // export a var whos value is a function that generates the html for our array of requests and a delete button 
    export const Requests = () => {
       // declare a var whos value is the result of the getRequests function
       const requests = getRequests()
        const plumbers = getPlumbers()
        const allCompletions = getCompletions()
        //delcare a function that returns each iteration of our request arrays .description and .id in html list format
        const convertRequestToListElement = (requestObj) => { //adding a select element to the list now to  be able to choose the plumber who completed the job.
    const foundCompletionObj = allCompletions.find(completionObj => requestObj.id === completionObj.requestId)
    
    ${!!foundCompletionObj 
        ? `The job was completed by ${plumbers.find(plumber => foundCompletionObj.plumberId === plumber.id ).name}` 
        : `<select class="plumbers" id="plumbers">    
            <option value="">Choose</option>
        ${plumbers.map(plumber => {
        return `<option value="${requestObj.id}--${plumber.id}">${plumber.name}</option>`}).join("")} 
            </select>`}
            ${requests.map(convertRequestToListElement).join("")
        