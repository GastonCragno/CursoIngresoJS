/*Gaston Cragno
Instrucción 'For' 3.
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" 
*/

function mostrar()
{
	let repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	let i;

	for(i=1;repeticiones>=i;i++)
	{
		console.log(i+"Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN