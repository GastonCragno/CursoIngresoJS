/*Gaston Cragno
Instrucción 'For' 5.
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	let repeticiones; 
	let i;
	
	for(;;)
	{

		repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
		
		if(repeticiones==9){
	 		break;
	 	}
	}	

}//FIN DE LA FUNCIÓN