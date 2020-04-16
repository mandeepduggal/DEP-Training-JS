const fs = require('fs');
var path = require('path');
const csvFilePath = '../public/csv/post-db.csv';

function getJSON() {
    let resultDb;
    let data = fs.readFileSync(path.join(__dirname, csvFilePath));
    resultDb = csvToJSON(data.toString());
    return resultDb;

}

function csvToJSON(csvData, id) {


    var lines = csvData.split("\r\n");
    var result = [];
    var headers = lines[0].split(",");
    if (id == undefined) {
        for (var i = 1; i < lines.length; i++) {

            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            obj["id"] = i;
            result.push(obj);

        }
    } else {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        obj["id"] = i;
        result.push(obj);
    }
    return result;
}



function putJSON(obj) {
    let dataline = "\r\n" + obj.uname + "," + obj.post;

    fs.appendFileSync(csvFilePath, dataline)
}

// console.log(getJSON());

module.exports = {
    "getJSON": getJSON,
    "putJSON": putJSON

};