function post (person, teams) {
    var formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSeQdmShRrcnwaXVdH4uKQdxKY9UWA4mtwVmy-4KjZTnZZO0hw/formResponse?usp=pp_url&entry.191061956=${person}&entry.277701156=${teams}`

    fetch(formUrl, {mode: "no-cors"})
        .then(response => response.json())
        .then(data => {
            // Process the returned data
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}