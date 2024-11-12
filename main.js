async function setupTable () {
    data = await getData()
    console.log(data)

    let players = data["players"]

    let ordered_player_list = Object.keys(players)
    ordered_player_list.sort((a,b) => {players[a]["overall"]["overallScore"] - players[b]["overall"]["overallScore"]})

    let rows = []
    for (key in ordered_player_list) {
        player = players[key]
        let row = document.createElement("tr")

        let rankEl = document.createElement("td")
        let nameEl = document.createElement("td")
        let overallEl = document.createElement("td")
        let oprEl = document.createElement("td")
        let recordEl = document.createElement("td")

        rankEl.textContent = ordered_player_list.indexOf(key)
        nameEl.textContent = key
        overallEl.textContent = player["overall"]["overallScore"]
        oprEl.textContent = player["overall"]["oprPercentile"]
        recordEl.textContent = player["overall"]["recordPercentile"]

        row.append(rankEl,nameEl,overallEl,oprEl,recordEl)
        rows.push(row)
    }

    document.querySelector("#leaderboard").querySelector("table").append(rows)
}
setupTable()