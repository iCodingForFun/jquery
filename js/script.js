$("#dinos").hide();
$("#dinos2").hide();

$("#muestraParrafo").click(function() {
    $("#parrafo").fadeIn("3000");
});

$("#ocultaParrafo").click(function() {
    $("#parrafo").fadeOut("3000");
})

$("#slideImagen").click(() => {
    $("#dinos").slideDown("slow");
});

$("#slideImagenUp").click(() => {
    $("#dinos").slideUp("slow");
});

$("#muestraOculta").click(() => {
    $("#dinos2").fadeToggle(2000, function() {
        if ($("#muestraOculta").html() == "Mostrar Imagen con FadeToggle") {
            $("#muestraOculta").html("Ocultar imagen con FadeToggle");
        } else {
            $("#muestraOculta").html("Mostrar Imagen con FadeToggle");
        }
    });
});