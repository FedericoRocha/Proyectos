function validar() {
    "use strict";
    var error = 0;
    var mensajesErrorNombre = " ";
    var mensajesErrorDni = " ";
    var mensajesErrorAsunto = " ";
    var mensajesErrorMensaje = " ";
    var mensajesErrorEmail = " ";
    var nombre1 = document.getElementById("nombre").value;
    var dni1 = document.getElementById("dni").value;
    var email1 = document.getElementById("email").value;
    var asunto1 = document.getElementById("asunto").value;
    var mensaje1 = document.getElementById("mensaje").value;
    if (nombre1 == null || nombre1.length == 0 || /^\s+$/.test(nombre1)) {
        error++;
        mensajesErrorNombre += "El campo nombre es obligatorio.";
    }
    if (nombre1.length > 0 && nombre1.length < 5) {
        error++;
        mensajesErrorNombre += "El nombre es muy corto.";
    }
    if (nombre1.length > 25) {
        error++;
        mensajesErrorNombre += "El nombre es muy largo.";
    }
    if (dni1 == null || dni1.length == 0) {
        error++;
        mensajesErrorDni += " El campo dni es obligatorio.";
    }
    if (!(/^\d{8}$/.test(dni1))) {
        error++;
        mensajesErrorDni += "El campo dni es invalido.";
    }
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+/.test(email1))) {
        error++;
        mensajesErrorEmail += "Ingrese un email valido";
    }
    if (asunto1 == null || asunto1.length == 0 || /^\s+$/.test(asunto1)) {
        error++;
        mensajesErrorAsunto += "El campo asunto es obligatorio";
    }
    if (mensaje1 == null || mensaje1.length == 0 || /^\s+$/.test(mensaje1)) {
        error++;
        mensajesErrorMensaje += "El campo mensaje es obligatorio";
    }
    if (error > 0) {
        document.getElementById("errorNombre").innerHTML = mensajesErrorNombre;
        document.getElementById("errorDni").innerHTML = mensajesErrorDni;
        document.getElementById("errorAsunto").innerHTML = mensajesErrorAsunto;
        document.getElementById("errorMensaje").innerHTML = mensajesErrorMensaje;
        document.getElementById("errorEmail").innerHTML = mensajesErrorEmail;
        return false;
    } else {
        return true;
    }
}

function fecha(){

$(function () {
$.datepicker.setDefaults($.datepicker.regional["es"]);
$("#datepicker").datepicker({
firstDay: 1
});
});


jQuery(function ($) {
$.datepicker.regional['es'] = {

currentText: 'Hoy',
monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
weekHeader: 'Sm',
dateFormat: 'dd/mm/yy',
firstDay: 1,
isRTL: false,
showMonthAfterYear: false,
yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);
});
}

