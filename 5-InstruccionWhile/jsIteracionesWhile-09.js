/* Gaston Cragno
Instrucción 'While' 9

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let resp;
	
	resp="s";
	numero = prompt("ingrese un numero");

	while(isNaN(numero) == true){ 
		numero = parseFloat(prompt("Error: ingrese un numero"));
	}

	numeroMaximo = numero;
	numeroMinimo = numero;
	resp = prompt("Ingresa otro? s/n");

	while(resp == "s"){
		
		numero = parseFloat(prompt("ingrese un numero"));
		
		while(isNaN(numero) == true){ 
		numero = parseFloat(prompt("Error: ingrese un numero"));
		}
	
		if (numero >= numeroMaximo) {
			numeroMaximo = numero;
		}
		else {
			numeroMinimo = numero;			
		}

		resp = prompt("Ingresa otro? s/n");
	}
	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;

}//  FIN DE LA FUNCIÓN