document.getElementById("NextPageButton").addEventListener("click", function() {
    index += max;
    if ((index) % apiMaxElement == 0) {
        GetRequestData(responseObject["nextPageToken"])
    }
    console.log(index);
    mainCardView();
});

document.getElementById("PreviousPageButton").addEventListener("click", function() {
    index -= max;
    console.log(index);
    mainCardView();
});