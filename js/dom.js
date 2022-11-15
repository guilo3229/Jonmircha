


// .inserAdjacent
// .inserAdjacentElement(position, el)
// .insertAdjacentHTML(position, html)
// .insertAdjacentText(position,text)

// Posiciones:
// Lo podrian antes de ese parrafo de ese nodo que pongas de referencia
    // beforebegin(hermano anterior)
    // afterbegin(primer hijo)
    // beforeend(ultimo hijo)
    // afterend(hermano siguiente)


const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

    let $contentCard = `
    <img src ="https://placeimg.com/200/200/any"alt="Any">
    <figcaption></figcaption>
    `;
    $newCard.classList.add("card");
    $newCard.insertAdjacentHTML("beforeend",$contentCard)
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
    $cards.insertAdjacentElement("afterbegin", $newCard)

    