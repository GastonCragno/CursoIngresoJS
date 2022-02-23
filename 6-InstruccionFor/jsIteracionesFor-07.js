/*Gaston Cragno
Instrucción 'For' 7.
al presionar el botón pedir un número. mostrar los numeros divisores 
desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores 
encontrados. */

function mostrar()
{
	let repeticiones = parseInt(prompt("ingrese un numero"));
	let numerosDivisores = 0;
	let i = 0;

	for(i=1;repeticiones>=i;i++)	
	{
		if (repeticiones % i == 0){
			alert(i);
			numerosDivisores = numerosDivisores + 1;
		}
	}

	alert("hay "+numerosDivisores+" numeros divisores encontrados");

}//FIN DE LA FUNCIÓN