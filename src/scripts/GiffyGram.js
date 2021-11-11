import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    ${NavBar()}
    ${PostList()}
    `
}
