/* Gaston Cragno
E/S 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//propongo las variables
	let primernumero;
	let resultado;

	//Tomo el sueldo del usuario
	primernumero = document.getElementById('txtIdImporte').value;
	

	//Paso a numeros el dato que ingreso el usuario como texto
    primernumero = parseInt(primernumero);

	//hago la ecuacion para sacar el porcentaje del importe
	resultado = primernumero / 100 * 75;

	//muestro el resultado en el cuadro de texto
	document.getElementById('txtIdResultado').value=resultado;
}

	//txtIdImporte
	//txtIdResultado