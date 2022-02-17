/* Gaston Cragno
Instrucción 'While' 5

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("ingrese f = femenino, m = masculino");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
	sexoIngresado = prompt("Error: ingrese f = femenino, m = masculino");
	}

	document.getElementById('txtIdSexo').value = "Sexo validado";

}//FIN DE LA FUNCIÓN