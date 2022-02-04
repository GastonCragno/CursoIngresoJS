/* Gaston Cragno
E/S 7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//propongo las variables
	let primernumero;
	let segundonumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdNumeroUno').value;
	segundonumero = document.getElementById('txtIdNumeroDos').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero =parseInt(segundonumero);

	//le doy el valor al resultado mediante la suma de las variables
	resultado = primernumero + segundonumero;

	//muestro el resultado de la suma
	alert("la suma es "+resultado);

}

function restar()
{
	//propongo las variables
	let primernumero;
	let segundonumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdNumeroUno').value;
	segundonumero = document.getElementById('txtIdNumeroDos').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero =parseInt(segundonumero);

	//le doy el valor al resultado mediante la resta de las variables
	resultado = primernumero - segundonumero;

	//muestro el resultado de la resta
	alert("la resta es "+resultado);
}

function multiplicar()
{ 
	//propongo las variables
	let primernumero;
	let segundonumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdNumeroUno').value;
	segundonumero = document.getElementById('txtIdNumeroDos').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero =parseInt(segundonumero);

	//le doy el valor al resultado mediante la multiplicacion de las variables
	resultado = primernumero * segundonumero;

	//muestro el resultado de la multiplicacion
	alert("la multiplicación es "+resultado);
}

function dividir()
{
	//propongo las variables
	let primernumero;
	let segundonumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdNumeroUno').value;
	segundonumero = document.getElementById('txtIdNumeroDos').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero =parseInt(segundonumero);

	//le doy el valor al resultado mediante la divicion de las variables
	resultado = primernumero / segundonumero;

	//muestro el resultado de la divicion
	alert("la divición es "+resultado);
}

	//txtIdNumeroUno
	//txtIdNumeroDos