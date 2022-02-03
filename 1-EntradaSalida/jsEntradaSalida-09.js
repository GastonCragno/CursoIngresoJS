/* Gaston Cragno
E/S 9

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{
	//propongo las variables
	var primernumero
	var x
	var y
	var resultado


	//Tomo el sueldo del usuario y doy valor a las otras variables
	//para hacer el calculo

	primernumero = document.getElementById('txtIdSueldo').value;
	x = 100
	y = 110

	//Paso a enteros la variable del sueldo

    primernumero = parseInt(primernumero);

	//hago la ecuacion para sacar el porcentaje 
	//del sueldo

	resultado = primernumero / x * y;

	//muestro el resultado en el cuadro de texto

	document.getElementById('txtIdResultado').value=resultado;
}

	//txtIdSueldo
	//txtIdResultado