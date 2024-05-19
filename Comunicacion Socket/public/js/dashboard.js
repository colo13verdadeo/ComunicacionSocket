$(".btnSeccion").click(function () {
    const sectionText = $(this).text().trim();

    if (sectionText === "CONSUMIBLES") {
        toggleContainers(".containerSeccion", ".containerConsumibles");
    } else if (sectionText === "OBJETOS") {
        toggleContainers(".containerSeccion", ".containerObjetos");
    }

    $(".btnBack").attr("data-seccion", ".containerSeccion");
});


$(".articulo").click(function () {
    // Cambiar el color de fondo al hacer clic


    const valueArt = $(this).find(".articuloName").text();
    const priceArt = $(this).find(".articuloPrice").text();
    console.log(valueArt);

    const $newBtn = $("<div>").addClass("artLoading")
        .html(`<h1 class="btn">${valueArt}<h1>` + `<h1 class="btn">${priceArt}</h1>` + `<h1 class="btn">5</h1>`)
        .css({
            'display': 'flex',
            'font-size': '1em',
            'justify-content': 'space-around',
            "align-items": "center"
        });

    // Agregar el nuevo div al contenedor con clase "articuloLoad"
    $(".articuloLoad").append($newBtn);




});








$(".btnBack").click(function () {
    // Ocultar todos los contenedores
    $(".container").addClass("none");

    // Mostrar el contenedor anterior
    $(".containerSeccion").removeClass("none");
});

$(".btnConsumibles").click(function () {
    const consumibleText = $(this).text().trim();

    if (consumibleText === "SALSAS" || consumibleText === "COMIDAS" || consumibleText === "BEBIDAS") {
        toggleContainers(".containerConsumibles", `.container${consumibleText.charAt(0).toUpperCase() + consumibleText.slice(1).toLowerCase()}`);
    }

    $(".btnBack").attr("data-seccion", ".containerConsumibles");
});

$(".btnObjetos").click(function () {
    const objetoText = $(this).text().trim();

    if (objetoText === "OTROS") {
        toggleContainers(".containerObjetos", ".containerOtros");
    }

    $(".btnBack").attr("data-seccion", ".containerObjetos");
});

function toggleContainers(hideSelector, showSelector) {
    $(hideSelector).toggleClass("none");
    $(showSelector).toggleClass("none");
}
