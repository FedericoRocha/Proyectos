
/* funcion autocompletar en barra de busqueda */


function autocompletar(){
var palabras = [
      "loratadina",
      "ibuprofeno",
      "forte",
      "redes sociales",
      "nuestros productos",
      "contacto"
     ];
     $(document).ready(function(){
    $( "#autocomplete" ).autocomplete({
      
      source:palabras
    
    });
  
});

}

/* funcion agregar un articulo al carrito de compras */



var totalCarrito=0;

function agregarElementosAlCarrito(){
	
	
	totalCarrito=totalCarrito+1;
	



	return document.getElementById("numeroCarrito").innerHTML=totalCarrito;
	
	}



/* funcion Calcular precios del resumen de compra */
	 
	 function calcularValor(){

	 	
	 	var producto=document.getElementById("producto").options[document.getElementById("producto").selectedIndex].value;

	 	var cantidad=document.getElementById("cantidad").value;

	 	document.getElementById("total").innerHTML="$"+producto*cantidad;

	 	var precioUnitario=document.getElementById("producto").value;

	 	document.getElementById("precioUnitario").innerHTML="$"+precioUnitario;
	 	                                       
	 	
	 	var producto1=document.getElementById("producto1").options[document.getElementById("producto1").selectedIndex].value;

	 	var cantidad1=document.getElementById("cantidad1").value;

	 	document.getElementById("total1").innerHTML="$"+producto1*cantidad1;

	 	var precioUnitario1=document.getElementById("producto1").value;

	 	document.getElementById("precioUnitario1").innerHTML="$"+precioUnitario1;
	 	                                       
 
	 	
	 	var producto2=document.getElementById("producto2").options[document.getElementById("producto2").selectedIndex].value;

	 	var cantidad2=document.getElementById("cantidad2").value;

	 	document.getElementById("total2").innerHTML="$"+producto2*cantidad2;

	 	var precioUnitario2=document.getElementById("producto2").value;

	 	document.getElementById("precioUnitario2").innerHTML="$"+precioUnitario2;
	 	                                      

		var producto3=document.getElementById("producto3").options[document.getElementById("producto3").selectedIndex].value;

	 	var cantidad3=document.getElementById("cantidad3").value;

	 	document.getElementById("total3").innerHTML="$"+producto3*cantidad3;

	 	var precioUnitario3=document.getElementById("producto3").value;

	 	document.getElementById("precioUnitario3").innerHTML="$"+precioUnitario3;
	 	                                       

	 	var total=producto*cantidad;

		var total1=producto1*cantidad1;

		var total2=producto2*cantidad2;

		var total3=producto3*cantidad3;

		var totalFinal;


		totalFinal=total+total1+total2+total3;


		document.getElementById("totalFinal").innerHTML="Total $"+totalFinal;
	 }



/* funcion Validacion del formulario de contacto con JavaScript */


   var numeros=/^\d{8}$/;

   var emailValido=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    


	 function validar() {
	 	var elMensaje="";

	 	var cantidadErrores=0;

	 	var nombre=document.getElementById("nombre").value;

	 	var DNI=document.getElementById("DNI").value;

	 	var asunto=document.getElementById("asunto").value;
	 	
	 	var numeros=/^\d{8}$/;

	 	var email=document.getElementById("email").value;

        var emailValido=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	 	
	 	
	 	
	 	if(nombre==""||nombre.length>20 ||nombre.length<10){
            elMensaje+="<p>Campo vacio, o el nombre no cumple los requisitos.<p>";
            cantidadErrores++;
            document.getElementById("nombre").className="error";
        }

        if(DNI=="" || !numeros.test(DNI)){
        	elMensaje+="<p>Campo vacio, o DNI invalido.<p>";
            cantidadErrores++;
            document.getElementById("DNI").className="error";
        }
         if(asunto==""){
          elMensaje+="<p>Campo de asunto vacio.<p>";
          cantidadErrores++;
            document.getElementById("asunto").className="error";
        }


        if(email=="" || !emailValido.test(email)){
        	elMensaje+="<p>Campo vacio, o Email invalido.<p>";
            cantidadErrores++;
            document.getElementById("email").className="error";
        }

        if(cantidadErrores>0){
        document.getElementById("mensaje").innerHTML=elMensaje;
        return false;
        }
        return true;
	 }


/* funcion Validacion del formulario de contacto con jQuery */
  
 /*  
   function validar(){
  var error=0;
  var mensajesError="";
  if($("#nombre").val()=="" ||nombre.length>20 ||nombre.length<10){
    mensajesError+="<p>Campo vacio, o el nombre no cumple los requisitos</p>";
    error++;
  }
  if($("#asunto")==""){
    mensajesError+="<p>Campo de asunto vacio<p>";
    error++;

  }

  if(!($("#DNI").val().mach(numeros))|| $("#DNI")=="" ){
    mensajesError+="<p>Campo vacio, o DNI invalido.<p>";
    error++;

  }
  if(!($(#email).val().mach(emailValido))|| $("#DNI")==""){
  mensajesError+="<p>Campo vacio, o Email invalido.<p>";
    error++;
  }


  if(error==0){
    return true;
  }else{
    $("#mensaje").html(mensajesError);
    return false;
  }
}

$(document).ready(function(){
  $("#enviar").submit(function(){
    return validar();
  });
});

*/

/* funcion Almanaque en es */



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


/* funcion Slider  */


$(window).load(function() {
       $('#slider').nivoSlider();
            });



/* funcion Texto dinamico en imagen */

function personalizar(){

	var texto=document.getElementById("buscarId").value;


	document.getElementById("etiquetaID").innerHTML=texto;
	 

}


 
/* funcion Cambiar color*/


 function cambiar () {
  document.getElementById('tapaFrasco').src = "img/tapaRoja.png";
 }
 
function cambiar1 () {
  document.getElementById('tapaFrasco').src = "img/tapaAzul.png";
 }
 
 function cambiar2 () {
  document.getElementById('tapaFrasco').src = "img/tapaVerde.png";
 }

 function cambiar3 () {
  document.getElementById('tapaFrasco').src = "img/tapaVioleta.png";
 }

 function cambiar4 () {
  document.getElementById('tapaFrasco').src = "img/tapaBordo.png";
 }


/* funcion Cambiar Tamaño */


function cambiarTamaño(){

  var texto="300mg";
   document.getElementById("mg").innerHTML=texto;
  }


function cambiarTamaño1(){
  var texto="600mg";
  document.getElementById("mg").innerHTML=texto;
}

function cambiarTamaño2(){
  var texto="800mg";
  document.getElementById("mg").innerHTML=texto;
}