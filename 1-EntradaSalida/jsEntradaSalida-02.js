/* Gaston Cragno
E/S 2

Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//ponemos una variable
	var nombreingresado;
	
	//le pedimos a la persona que ingrese su nombre
	nombreingresado=prompt("ingrese su nombre") ;
	
	//le informamos y mostramos a la persona cual es su nombre
	alert("Su nombre es: "+nombreingresado)
}

