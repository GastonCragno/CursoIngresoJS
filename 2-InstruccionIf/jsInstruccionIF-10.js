/* Gaston Cragno
Instrucción 'if' 10
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo = 10;
	let minimo = 1;


	numero = Math.round(Math.random() * (maximo - minimo) + minimo ); 

	if (numero >= 9) {alert ("EXELENTE ("+numero+")")}
		else if (numero >=4) {alert ("APROBÓ ("+numero+")")}
			else alert("Vamos, la proxima se puede ("+numero+")");


}//FIN DE LA FUNCIÓN
