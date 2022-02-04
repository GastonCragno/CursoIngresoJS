/* Gaston Cragno
TPs 1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//propongo las variables
	let primernumero;
	let segundonumero;
	let tercernumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdPrecioUno').value;
	segundonumero = document.getElementById('txtIdPrecioDos').value;
	tercernumero = document.getElementById('txtIdPrecioTres').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero = parseInt(segundonumero);
    tercernumero = parseInt(tercernumero);

	//le doy el valor al resultado mediante la suma de las variables
	resultado = primernumero + segundonumero + tercernumero;

	//muestro el resultado de la suma
	alert("La suma es "+resultado);	
}
function Promedio () 
{
	//propongo las variables
	let primernumero;
	let segundonumero;
	let tercernumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdPrecioUno').value;
	segundonumero = document.getElementById('txtIdPrecioDos').value;
	tercernumero = document.getElementById('txtIdPrecioTres').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero = parseInt(segundonumero);
    tercernumero = parseInt(tercernumero);


    //propongo la operacion
	resultado = (primernumero + segundonumero + tercernumero) / 3;

	//pongo el alert con el resultado
	alert("El promedio es "+resultado);

}
function PrecioFinal () 
{
	//propongo las variables
	let primernumero;
	let segundonumero;
	let tercernumero;
	let resultado;


	//Tomo los valores que de el usuario en las variables
	primernumero = document.getElementById('txtIdPrecioUno').value;
	segundonumero = document.getElementById('txtIdPrecioDos').value;
	tercernumero = document.getElementById('txtIdPrecioTres').value;

	//Paso a enteros las variables
    primernumero = parseInt(primernumero);
    segundonumero = parseInt(segundonumero);
    tercernumero = parseInt(tercernumero);


    //propongo la operacion
	resultado = (primernumero + segundonumero + tercernumero) * 1.21;


	//pongo el alert con el resultado
	alert("El precio final más IVA es "+resultado);
}

	//txtIdPrecioUno
	//txtIdPrecioDos
	//txtIdPrecioTres