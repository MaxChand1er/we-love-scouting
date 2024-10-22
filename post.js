function postToSheet (person, teams, eventCode) {
    var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeQdmShRrcnwaXVdH4uKQdxKY9UWA4mtwVmy-4KjZTnZZO0hw/viewform?usp=pp_url&entry.191061956=${person}&entry.277701156=${teams}&entry.319104669=${eventCode}`

    fetch(formUrl)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error =>
            console.error('Error:', error)
        )
}