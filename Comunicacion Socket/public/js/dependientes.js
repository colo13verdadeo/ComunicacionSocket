
const colores = ["#06D6A0", "#F08A4B", "#F2A541", "#A9B6DA", "#90A9B7"];
$(".dependientesBtn").click(function () {
    $("#overlay").toggleClass("none");
})

let intentos = 0;
let numberColor = 0;
$(document).ready(function () {
    $(".dependientesBtn").each(function (element) {


        $(this).css("background-color", colores[numberColor]);

        numberColor++;
        if (numberColor > 4) {
            numberColor = 0;
        }

    })

})


$(".acceptBtn").click(function () {
    const valInputCode = $(".inputCode").val().trim();
    console.log(intentos);


    if (valInputCode == code) {
        $("#overlay").toggleClass("none");
        $(".textCode").addClass("none");
        $(".textCode2").addClass("none");
        $(".inputCode").val("")

        intentos = 0;
    } else if (intentos <= 3) {
        $(".textCode").removeClass("none");
        intentos++;
    } else {
        $(".textCode2").removeClass("none");
        $("#form-container2").removeClass("none");

        $("#form-container").addClass("none");
    }
})


$(".acceptBtn2").click(function () {
    $("#form-container2").addClass("none");

    $(".textCode").addClass("none");

    $(".textCode2").addClass("none");

    $("#form-container").removeClass("none");
    $("#overlay").toggleClass("none");
    $(".inputCode").val("")
    intentos = 0;

})