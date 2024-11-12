sheetId = "13ZDiciDlCF4xaWq0_5Db-mA5CY3SUucBOXhcPiYBG4I"
const sheetLink = 'https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/'+sheetId+'/gviz/tq?tqx=out:json&tq&gid=0'

const data_url = "https://maxchand1er.github.io/religious-scouting-rituals/data.json"


async function fetchSheetCsv() {
    console.log(sheetLink)
    let response = await fetch(sheetLink, {origin: "hi", headers: {"content-type": "text/csv;charset=UTF-8"} })
    let data = await response.text()
    console.log("sent reques tto" + sheetLink)
    console.log(data)
    data = JSON.parse(
        data.match(/(?<=Query\.setResponse\().+(?=\);)/gm)
    );
        
        /*.then(response => response.text())
        .then(data => {
            return data; // Return the data for further use
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Rethrow to handle it in the calling function
        });*/
    console.log(data)
    return data
}


function csvToJson(csvString) {
    const rows = csvString
        .split("\n");

    const headers = rows[0]
        .split(",");

    const jsonData = [];
    for (let i = 1; i < rows.length; i++) {

        const values = rows[i]
            .split(",");

        const obj = {};

        for (let j = 0; j < headers.length; j++) {

            const key = headers[j]
                .trim();
            const value = values[j]
                .trim();

            obj[key] = value;
        }

        jsonData.push(obj);
    }
    return JSON.stringify(jsonData);
}

async function GetJson () {
    const json = await fetchSheetCsv()
    console.log(json)

    data = []
    json["table"]["rows"].forEach(row => {
        data.push({
            "date": Date.parse(row["c"][0]["f"]),
            "name": row["c"][1]["v"],
            "picks": row["c"][2]["v"],
            "event": row["c"][3]["v"]
        })
    });

    return data
}

async function getData() {
    const data = await fetch(data_url)
        .then(response => response.json())

    return data
}