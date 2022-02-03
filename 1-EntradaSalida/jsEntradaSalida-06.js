/* Gaston Cragno
E/S 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	//propongo las variables
	var primernumero
	var segundonumero
	var resultado


	//Paso a enteros las variables

	primernumero = parseInt(document.getElementById('txtIdNumeroUno').value);

	segundonumero = parseInt(document.getElementById('txtIdNumeroDos').value);


	//le doy el valor al resultado mediante la suma de las variables

	resultado = primernumero + segundonumero;

	//muestro el resultado de la suma
	alert("la suma es "+resultado);

}
 
	// txtIdNumeroUno
	// txtIdNumeroDos