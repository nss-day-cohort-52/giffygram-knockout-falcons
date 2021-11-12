import { getFeed, getUsers } from "../data/provider.js";

export const UserSelect = () => {
    const feedState = getFeed()
    const users = getUsers()
    let html = `<option class="user" value="0">All users</option>`
    
    users.forEach(
        (user) => {
            html += `<option class="user" value="${user.id}"`
            if (feedState.chosenUser === user.id) {
                html += ` selected`
            }
            html += `>${user.name}</option>`
        }
    )

    return html
}

