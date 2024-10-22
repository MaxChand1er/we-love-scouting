function postToSheet (person, teams, eventCode) {
    var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeQdmShRrcnwaXVdH4uKQdxKY9UWA4mtwVmy-4KjZTnZZO0hw/formResponse?usp=pp_url&entry.191061956=${person}&entry.277701156=${teams}&entry.319104669=${eventCode}`

    fetch(formUrl, {mode: "no-cors"})
        .catch(error =>
            console.error('Error:', error)
        )
}