/* Gaston Cragno
Instrucción 'While' 6
*/
function mostrar()
{
	let numero;
	let acum=0;
	let promedio;
	let =0;

	while(i < 5){
		numero = parseInt(prompt("ingrese un numero"));
		acum = acum + numero;
		i++;    // Es igual a (i = i + 1;)
	}

	promedio = acum/5;
	
	document.getElementById('txtIdSuma').value = acum;
	document.getElementById('txtIdPromedio').value = promedio;


}//FIN DE LA FUNCIÓN