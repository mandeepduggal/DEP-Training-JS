document.getElementById("NextPageButton").addEventListener("click", function() {
    index += max;
    if ((index) % apiMaxElement == 0) {
        GetRequestData(responseObject["nextPageToken"])
    }
    mainCardView();
});

document.getElementById("PreviousPageButton").addEventListener("click", function() {
    index -= max;
    mainCardView();
});
