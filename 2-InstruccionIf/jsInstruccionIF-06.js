/* Gaston Cragno
Instrucción 'if' 6
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if ( edad < 13 ){

		alert("es un niño");
		}

	else {
		 if ( edad <=17 ){
	 		alert("es un adolescente");
	 		}
	 	else { 
	 		alert("es un adulto");
	 		}
		}
}	//FIN DE LA FUNCIÓN
