/* Gaston Cragno
Instrucción 'if' 7
*/
function mostrar()
{
	//tomo la edad  
	let edad;
	let estadocivil;

	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadocivil = document.getElementById('estadoCivil').value;

	if (edad <=17 && estadocivil != "Soltero"){
 
	alert("Es muy pequeño para NO ser soltero");}
}

	//FIN DE LA FUNCIÓN
	//txtIdEdad