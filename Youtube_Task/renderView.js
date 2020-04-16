function mainCardView() {
    console.log(responseData);
    cardViewTemplate();
    if (index <= 0) {
        document.getElementById('PreviousPageButton').disabled = true;
    } else {
        document.getElementById('PreviousPageButton').disabled = false;
    }
}

function cardViewTemplate() {
    console.log(responseData);
    let mainNode = document.querySelector('main');
    mainNode.innerHTML = '';
    for (let i = index; i < ((responseData.length < (index + max)) ? responseData.length : (index + max)); i++) {
        // Template of Card
        console.log(responseData[i]);

        let card = '<div id="CardViewDiv" name="CardViewDiv" class="CardViewDiv">' +
            '<img src="' + responseData[i]["snippet"]["thumbnails"]["high"]["url"] + '" alt="image">' +
            '<h3>' +
            responseData[i]["snippet"]["title"] +
            '</h3>' +
            '<p class="description" id="description" name="description">' +
            responseData[i]["snippet"]["description"] +
            '</p>' +
            '</div>';
        mainNode.innerHTML += card;
    }
}