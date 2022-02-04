/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	//pongo las variables
	let temperatura;
	let resultado;

	//tomo los valores que da el usuario
	temperatura = document.getElementById('txtIdTemperatura').value;

	//paso a entero la temperatura dada
	temperatura = parseInt(temperatura);

	//planteo la operacion
	resultado = (temperatura - 32) * (5/9);

	alert(temperatura+" Fahrenheit son "+resultado+" Centigrados");

}
function CentigradosFahrenheit () 
{

	//pongo las variables
	let temperatura;
	let resultado;

	//tomo los valores que da el usuario
	temperatura = document.getElementById('txtIdTemperatura').value;

	//paso a entero la temperatura dada
	temperatura = parseInt(temperatura);

	//planteo la operacion
	resultado = (temperatura * 9/5) + 32;

	alert(temperatura+" Centigrados son "+resultado+" Fahrenheit");
}

	//txtIdTemperatura
	//(32 °F − 32) × 5/9 = 0 °C  (A Centigrados)
	//(0 °C × 9/5) + 32 = 32 °F  (A Fahrenheit)
