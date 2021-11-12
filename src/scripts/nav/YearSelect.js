import { getFeed } from "../data/provider.js";

export const YearSelect = () => {
    const feedState = getFeed()
    const years = ["2021", "2020", "2019", "2018", "2017"]
    let html = `<option class="year" value="0">Forever</option>`
    
    years.forEach(
        (year) => {
            html += `<option class="year" value="${year}"`
            if (feedState.chosenYear === parseInt(year)) {
                html += ` selected`
            }
            html += `>${year}</option>`
        }
    )

    return html
}