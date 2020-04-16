const apiMaxElement = 6;
var responseObject = {}
var responseData = [];
var index = 0;
const max = 3;

function GetRequestData(pageToken) {
    // Create Url
    let url = "https://www.googleapis.com/youtube/v3/search";
    const apiKey = "AIzaSyCzMBhhN4vbewxjjvJN9RlZXHh-tTbjt-k";
    const type = "video";
    const part = "snippet";
    const maxResults = 6;
    url += "?key=" + (apiKey ? apiKey : "");
    url += "&type=" + (type ? type : "");
    url += "&part=" + (part ? part : "");
    url += "&maxResults=" + (maxResults ? maxResults : "");
    let query = document.getElementById("SearchTextBar").value;
    url += "&q=" + (query ? query : "");


    if (pageToken != undefined) {
        url += "&pageToken=" + pageToken;
    } else {
        responseObject = {}
        responseData = [];
        index = 0;
    }
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            storeResponse(data);
        }).catch(error => console.log(error.message));

}

function storeResponse(jsonData) {
    console.log(jsonData["items"])
    responseObject = jsonData;
    responseData = responseData.concat(jsonData["items"]);
    mainCardView();
}