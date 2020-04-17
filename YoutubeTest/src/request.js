const apiMaxElement = 6;
var responseObject = {}
var responseData = [];
var index = 0;
const max = 3;
const apiKey = "AIzaSyCzMBhhN4vbewxjjvJN9RlZXHh-tTbjt-k";

function getQuery() {
    return document.getElementById("SearchTextBar").value;
}

function GetRequestData(pageToken) {

    let url = "https://www.googleapis.com/youtube/v3/search";
    const type = "video";
    const part = "snippet";
    const maxResults = 6;
    url += "?key=" + (apiKey ? apiKey : "");
    url += "&type=" + (type ? type : "");
    url += "&part=" + (part ? part : "");
    url += "&maxResults=" + (maxResults ? maxResults : "");
    let query = getQuery();
    url += "&q=" + (query ? query : "");


    if (pageToken != undefined) {
        url += "&pageToken=" + pageToken;
    } else {
        responseObject = {}
        responseData = [];
        index = 0;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            storeResponse(data);
        }).catch(error => alert(error.message));

}

function storeResponse(jsonData) {
    responseObject = jsonData;
    responseData = responseData.concat(jsonData["items"]);
    mainCardView();
}