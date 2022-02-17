/* Gaston Cragno
Instrucción 'While' 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	
	let numeroIngresado;
	
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9 inclusive."));

	while (numeroIngresado <0 || numeroIngresado >9) {
	numeroIngresado = parseInt(prompt("Error: ingrese un número entre 0 y 9 inclusive."));
	}

	document.getElementById('txtIdNumero').value = "El dato es correcto";
	
}  //FIN DE LA FUNCIÓN