/* Gaston Cragno
Instrucción 'if' 1
*/

function mostrar()
{
	//propongo una variante
	let edad;

	//pongo el valor del cuadro a la variante y como entero
	edad = parseInt(document.getElementById('txtIdEdad').value);

	//planteo la cuestion y pongo el mensaje de la alerta
	if ( edad == 15 ) {alert("niña bonita");
}

	alert("FIN DE LA FUNCIÓN");

}//FIN DE LA FUNCIÓN

	//txtIdEdad