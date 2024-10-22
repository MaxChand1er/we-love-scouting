const url = "https://maxchand1er.github.io/religious-scouting-rituals/"

const eventDropdown = document.querySelector("#event-dropdown")
const eventContainer = document.querySelector("#event-container")


eventDropdown.addEventListener("change", () => {
    SelectEvent(eventDropdown.value)
})

function SelectEvent(event) {
    if (event == "") {
        eventContainer.classList.add("hidden")
        return
    } 

    const eventData = fetch(url + "data.json")
        .then(response => response.json())
        .then(data => console.log(data))

    document.querySelector("#pick-container").querySelector("h1").textContent
    GetJson()
    console.log(event)
}