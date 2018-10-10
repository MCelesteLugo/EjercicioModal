function desplegarZona() {

    var desplegable = document.getElementById("desplegable-zona");

    if (desplegable.style.display == "none"){
        desplegable.style.display = "flex";
    }
    else {
        desplegable.style.display = "none";
    };

};

function desplegarCountry() {
    var input = document.getElementById("desplegable-country");

    if (input.style.display == "none") {
        input.style.display = "flex";
    }
    else {
        input.style.display = "none";
    };
};


function desplegarZonaStream() {

    var desplegable = document.getElementById("desplegable-zona-stream");

    if (desplegable.style.display == "none"){
        desplegable.style.display = "flex";
    }
    else {
        desplegable.style.display = "none";
    };

};

function desplegarCountryStream() {
    var input = document.getElementById("desplegable-country-stream");

    if (input.style.display == "none") {
        input.style.display = "flex";
    }
    else {
        input.style.display = "none";
    };
};

function openRental() {
    var rental = document.getElementById("modal-rental")

    if (rental.style.display == "none") {
        rental.style.display = "flex";
    }
    else {
        rental.style.display = "none";
    }
}

function openStream() {
    var stream = document.getElementById("modal-stream")

    if (stream.style.display == "none") {
        stream.style.display = "flex";
    }
    else {
        stream.style.display = "none";
    }
}