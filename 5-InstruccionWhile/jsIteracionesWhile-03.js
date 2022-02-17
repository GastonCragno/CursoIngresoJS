/* Gaston Cragno
Instrucción 'While' 3

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	
	claveIngresada = (prompt("Ingrese la CLAVE"));

	while (claveIngresada != "utn750") {
	claveIngresada = (prompt("Error: Ingrese la CLAVE"));
	}
	alert("Clave confirmada");

	
}//FIN DE LA FUNCIÓN
