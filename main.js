const url = "https://maxchand1er.github.io/religious-scouting-rituals/"

const eventDropdown = document.querySelector("#event-dropdown")
const eventContainerTemplate = document.querySelector("#event-container")


eventDropdown.addEventListener("change", () => {
    SelectEvent(eventDropdown.value)
})

async function SelectEvent(event) {
    if (document.querySelectorAll(".event-container").length > 1) {
        document.querySelectorAll(".event-container").forEach(el => {
            if (el.id != "event-container-template") {
                el.remove()
            }
        });
    }
    if (event == "") {
        eventContainer.classList.add("hidden")
        return
    } 

    const eventData = await fetch(url + "data.json")
        .then(response => response.json())
        .then(data => console.log(data["events"][event]))

    let container = eventContainer.cloneNode(true)
    container.id = "event-container-" + event
    
    container.querySelector("#pick-container").querySelector("h1").textContent = `Make your pick for ${eventData["name"]}!`

    container.querySelector(".pick-submit-btn").addEventListener("click", () => {
        const name = container.querySelector(".name-input").value.strip()
        const picks = container.querySelector(".picks-input").value.strip()

        postToSheet(name, picks, event)
    })

    container.classList.remove("hidden")
    document.querySelector("main").appendChild(container)
    console.log(event)
}