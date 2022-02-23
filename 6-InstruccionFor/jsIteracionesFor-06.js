/*Gaston Cragno
Instrucción 'For' 6.
al presionar el botón pedir un número. mostrar los numeros pares desde 
el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. 
*/

function mostrar()
{
	let repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	let numerosPares = 0;
	let i = 0;

	for(i=1;repeticiones>=i;i++)	
	{
		if (i % 2 == 0){
			alert(i);
			numerosPares = numerosPares + 1;
		}
	}

	alert("hay "+numerosPares+" numeros pares encontrados");

}   //FIN DE LA FUNCIÓN