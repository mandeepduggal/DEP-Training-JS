function setAblityOfButton(ability) {
    document.getElementById('PreviousPageButton').disabled = ability;
}

function mainCardView() {
    cardViewTemplate();
    if (index <= 0) {
        setAblityOfButton(true);
    } else {
        setAblityOfButton(false);
    }
}

function cardViewTemplate() {
    let mainNode = getMainNode()
    mainNode.innerHTML = '';
    for (let i = index; i < ((responseData.length < (index + max)) ? responseData.length : (index + max)); i++) {
        // Template of Card

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

function getMainNode() {
    return document.querySelector('main');
}
