async function setupTable () {
    data = await getData()

    let table = document.querySelector("#leaderboard").querySelector("table")

    let players = data["players"]
    console.log(players)

    let ordered_player_list = Object.keys(players)
    ordered_player_list.sort((a,b) => {
        console.log(b, players[b]["overall"]["overallScore"], a, players[a]["overall"]["overallScore"], players[b]["overall"]["overallScore"] - players[a]["overall"]["overallScore"])
        players[b]["overall"]["overallScore"] - players[a]["overall"]["overallScore"]})
    console.log(ordered_player_list)

    let rows = []
    ordered_player_list.forEach(key => {
        console.log(key)
        player = players[key]
        console.log(player)
        let row = table.insertRow()

        let rankEl = row.insertCell()
        let nameEl = row.insertCell()
        let overallEl = row.insertCell()
        let oprEl = row.insertCell()
        let recordEl = row.insertCell()

        rankEl.textContent = ordered_player_list.indexOf(key) + 1
        nameEl.textContent = key
        overallEl.textContent = player["overall"]["overallScore"]
        oprEl.textContent = player["overall"]["oprPercentile"]
        recordEl.textContent = player["overall"]["recordPercentile"]
    })
}
setupTable()