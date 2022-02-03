/* Gaston Cragno
E/S 5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//propongo las variables
	var nombreIngresado
	var edadIngresada
	
	//encadeno el las variables a cada cuadro.

	nombreIngresado = document.getElementById('txtIdNombre').value;

	edadIngresada = document.getElementById('txtIdEdad').value;

	//concateno los datos junto al texto que pide la consigna.
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");


}


	// txtIdNombre 
	// txtIdEdad