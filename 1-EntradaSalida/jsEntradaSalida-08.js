/* Gaston Cragno
E/S 8

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//propongo las variables
	var primernumero
	var segundonumero
	var resultado


	//Tomo los valores que de el usuario en las variables

	primernumero = document.getElementById('txtIdNumeroDividendo').value;
	segundonumero = document.getElementById('txtIdNumeroDivisor').value;

	//Paso a enteros las variables

    primernumero = parseInt(primernumero);
    segundonumero =parseInt(segundonumero);

	//saco el resto mediante la operacion

	resultado = primernumero % segundonumero;

	//muestro el resultado
	alert("El resto es "+resultado);
}

	//txtIdNumeroDividendo
	//txtIdNumeroDivisor