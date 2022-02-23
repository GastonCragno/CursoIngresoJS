/*Gaston Cragno
Instrucción 'For' 8.
al presionar el botón pedir un número. Informar si el numero es PRIMO o no. 
*/

function mostrar()
{
	let repeticiones = parseInt(prompt("ingrese un numero"));
	let numerosDivisores = 0;
	let i = 1;

	for(i=1;repeticiones>=i;i++)	
	{
		if (repeticiones % i == 0){
			numerosDivisores = numerosDivisores + 1;
		}
	}

	if (numerosDivisores == 2){
		alert(repeticiones+" Es un numero primo");
	}
	else{
		alert(repeticiones+" No es un numero primo");
	}
	
}//FIN DE LA FUNCIÓN