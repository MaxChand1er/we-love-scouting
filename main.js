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

    GetJson()
    console.log(event)
}