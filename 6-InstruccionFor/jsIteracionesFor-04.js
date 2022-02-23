/*Gaston Cragno
Instrucción 'For' 4.
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
	let repeticiones;
	let i;
	
	for(;;)
	{
		repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

		if(repeticiones==3) 
		{
			break;
		}
	}

	console.log(i+"<br>");

}//FIN DE LA FUNCIÓN