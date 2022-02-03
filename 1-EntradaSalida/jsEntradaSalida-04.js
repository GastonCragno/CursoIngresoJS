/* Gaston Cragno
E/S 4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declare variable
	let nombreIngresado;

	//pido el nombre por prompt
	nombreIngresado = prompt("ingrese su nombre");

	// guardar   =    dato
	document.getElementById('txtIdNombre').value = nombreIngresado;


	/* Seria innecesario usar 
	alert("su nombre es: "+nombreIngresado);
    porque no me lo pide la consigna.   
	*/
}

