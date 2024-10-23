sheetId = "1_BlmEIzj9PHMkKceLILv7pM2YOgHLWMdL8RnDwN5o0c"
const sheetLink = 'https://docs.google.com/spreadsheets/d/'+sheetId+'/gviz/tq?tqx=out:json&tq&gid=0'

async function fetchSheetCsv() {
    let response = await fetch(sheetLink, {headers: {"content-type": "text/csv;charset=UTF-8"}})
    let data = await response.text()
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
        data.append({
            "date": row["c"][0],
            "name": row["c"][1],
            "picks": row["c"][2],
            "event": row["c"][3]
        })
    });

    return data
}  