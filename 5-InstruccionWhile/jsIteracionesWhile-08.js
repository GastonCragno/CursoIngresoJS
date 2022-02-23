/* Gaston Cragno
Instrucción 'While' 8

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let resp="s";
	let sumaPositivos=0;
	let multiplicacionNegativos=1;

	while(resp == "s"){
		numero = parseFloat(prompt("ingrese un numero"));
		
		while(isNaN(numero) == true){ 
		numero = parseFloat(prompt("Error: ingrese un numero"));
		}
		
		if (numero >= 0){
			sumaPositivos = sumaPositivos + numero; 
		}
		else {
			multiplicacionNegativos = multiplicacionNegativos * numero; 
		}
		resp = prompt("Ingresa otro? s/n");

	}

	document.getElementById('txtIdSuma').value = sumaPositivos ;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos ;


}//  FIN DE LA FUNCIÓN