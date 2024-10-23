const url = "https://maxchand1er.github.io/religious-scouting-rituals/"
const eventDropdown = document.querySelector("#event-dropdown")
const eventContainerTemplate = document.querySelector("#event-container-template")


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
        eventContainerTemplate.classList.add("hidden")
        return
    } 

    const eventData = await fetch(url + "data.json")
        .then(response => response.json())
        .then(data => data["events"][event])

    let container = eventContainerTemplate.cloneNode(true)
    container.id = "event-container-" + event
    
    container.querySelector(".pick-container").querySelector("h1").textContent = `Make your pick for ${eventData["name"]}!`

    container.querySelector(".pick-submit-btn").addEventListener("click", () => {
        const name = container.querySelector(".name-input").value.trim()
        let picks = container.querySelector(".picks-input").value.trim().split(/,|(, )/gm)
        
        picks = picks.map((pick) => {
            return (pick in eventData["teams"] ? 
                pick.trim() :
                "invalid"
        )})
        if (!name) {
            alert("Enter a valid name")
            return
        } if (!picks || picks.length < 6 || picks.contains("invalid")) {
            alert("Enter valid picks. Must be six teams numbers separated by commas attending the event.")
        }

        postToSheet(name, picks, event)
    })

    createPredictionTable(event, container)

    container.classList.remove("hidden")
    document.querySelector("main").appendChild(container)
    console.log(event)
}

async function GetPredictionsFromSheet (event) {
    data = await GetJson()
    console.log(data)

    lastPredictions = {}
    console.log(data.filter((el) => el["event"] == event))
    data.filter((el) => el["event"] == event).forEach((el) => {
        lastPredictions[el["name"]] = el
    })

    return lastPredictions
}

function createPredictionTable(event, container) {
    const predictions = GetPredictionsFromSheet(event)

    for (key in predictions) {
        let row = document.createElement("tr")
        let nameEl = document.createElement("td")
        let picksEl = document.createElement("td")

        nameEl.textContent = key
        picksEl.textContent = predictions[key]["picks"]

        row.append(nameEl, picksEl)

        container.querySelector("table").append(row)
    }
}