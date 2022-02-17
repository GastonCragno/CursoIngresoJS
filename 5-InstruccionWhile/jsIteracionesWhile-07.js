/* Gaston Cragno
Instrucción 'While' 7

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acum=0;
	let secu=0;
	let promedio;
	let resp="s";

	while(resp == "s"){
		numero = parseInt(prompt("ingrese un numero para sumar"));
		resp = prompt("Ingresa otro? s/n");
		acum = acum + numero;
		secu++;    
	}

	promedio = acum/secu;
	
	document.getElementById('txtIdSuma').value = acum;
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN