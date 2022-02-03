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
	let x;
	let y;
	let resultado;


	//Tomo el sueldo del usuario y doy valor a las otras variables
	//para hacer el calculo

	primernumero = document.getElementById('txtIdImporte').value;
	x = 100
	y = 75

	//Paso a enteros la variable del importe

    primernumero = parseInt(primernumero);

	//hago la ecuacion para sacar el porcentaje 
	//del importe

	resultado = primernumero / x * y;

	//muestro el resultado en el cuadro de texto
	
	document.getElementById('txtIdResultado').value=resultado;
}

	//txtIdImporte
	//txtIdResultado