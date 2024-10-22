sheetId = "1_BlmEIzj9PHMkKceLILv7pM2YOgHLWMdL8RnDwN5o0c"
const sheetLink = 'https://docs.google.com/spreadsheets/d/'+sheetId+'/gviz/tq?tqx=out:json&tq&gid=0'

function fetchSheetCsv() {
    return fetch(sheetLink)
        .then(response => response.text())
        .then(data => {
            return data; // Return the data for further use
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Rethrow to handle it in the calling function
        });
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
    const csv = await fetchSheetCsv()
    return csvToJson(csv)
}  