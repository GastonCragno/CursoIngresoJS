/* Gaston Cragno
Instrucción 'if' 5
*/

function mostrar()

{
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);


	if ( edad <13 ) {alert("no es adolescente");} 

	if ( edad >17 ) {alert("no es adolescente");} 
	
	alert("FIN DE LA FUNCIÓN");

}//FIN DE LA FUNCIÓN

	//txtIdEdad