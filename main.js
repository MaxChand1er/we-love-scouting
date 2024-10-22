const eventDropdown = document.querySelector("#event-dropdown")

eventDropdown.addEventListener("change", () => {
    SelectEvent(eventDropdown.value)
})

function SelectEvent(event) {
    console.log(event)
}