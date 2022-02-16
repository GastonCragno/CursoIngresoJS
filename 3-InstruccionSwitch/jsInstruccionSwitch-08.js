/* Gaston Cragno
Instrucción 'Switch' 8
*/

function mostrar()
{

	let destino;

	destino = document.getElementById('txtIdDestino').value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":		
		alert("Hace FRIO");
		break;

		case "Mar del plata":
		case "Cataratas":
		alert("Hace CALOR");

		default:
		break;
	}

}//FIN DE LA FUNCIÓN