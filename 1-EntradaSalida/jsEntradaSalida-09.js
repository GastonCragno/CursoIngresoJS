/* Gaston Cragno
E/S 9

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{
	//propongo las variables
	let primernumero;
	let x;
	let y;
	let resultado;

	//Tomo el sueldo del usuario
	primernumero = document.getElementById('txtIdSueldo').value;	

	//Paso a numeros el dato tomado como texto
    primernumero = parseInt(primernumero);

	//hago la ecuacion para sacar el porcentaje del sueldo
	resultado = primernumero / 100 * 110;

	//muestro el resultado en el cuadro de texto
	document.getElementById('txtIdResultado').value=resultado;
}

	//txtIdSueldo
	//txtIdResultado