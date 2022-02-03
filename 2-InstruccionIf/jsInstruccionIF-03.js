/* Gaston Cragno
Instrucción 'if' 3
*/

function mostrar()

{
	var edad

	edad = parseInt(document.getElementById('txtIdEdad').value);

	
	if ( edad >= 18 ) 
	{alert("Es mayor de edad");}
	

	if ( edad <= 17 )
	{alert("Es menor de edad");}

	
	alert("FIN DE LA FUNCIÓN")

}//FIN DE LA FUNCIÓN