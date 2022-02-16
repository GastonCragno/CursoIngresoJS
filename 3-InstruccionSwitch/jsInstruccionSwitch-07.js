/* Gaston Cragno
Instrucción 'Switch' 7
*/

function mostrar()
{
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":		
		alert("Sur.");
		break;

		case "Mar del plata":
		alert("Oeste.");
		break;

		case "Cataratas":
		alert("Norte.");

		default:
		break;
	}

}//FIN DE LA FUNCIÓN  txtIdDestino.value