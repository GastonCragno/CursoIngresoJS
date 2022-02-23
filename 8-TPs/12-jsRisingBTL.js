/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    let edadIngresada;
    let sexoIngresado; 
    let estadoCivil;
    let sueldoBruto;
    let numeroLegajo;
   
    edadIngresada = parseInt(prompt("Ingrese edad, entre 18 y 90 años inclusive."));

    while (edadIngresada <17 || edadIngresada > 91 ) {
    edadIngresada = parseInt(prompt("Error: Ingrese edad, entre 18 y 90 años inclusive."));
    }
  
    document.getElementById('txtIdEdad').value = edadIngresada;


    sexoIngresado = prompt("Ingrese sexo, “m” para masculino y “f” para femenino");

    while (sexoIngresado != "m" && sexoIngresado != "f") {
    sexoIngresado = prompt("Error: Ingrese sexo, “m” para masculino y “f” para femenino");
    }

    document.getElementById('txtIdSexo').value = sexoIngresado;
    

    estadoCivil = parseInt(prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

    while (estadoCivil < 1 || estadoCivil > 4) {
    estadoCivil = parseInt(prompt("Error: Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
    }
    
    switch(estadoCivil){
        case 1:
        document.getElementById('txtIdEstadoCivil').value = "Soltero";
        break;
        case 2:
        document.getElementById('txtIdEstadoCivil').value = "Casado";
        break;
        case 3:
        document.getElementById('txtIdEstadoCivil').value = "Divorciado";
        break;
        default:
        document.getElementById('txtIdEstadoCivil').value = "Viudo";
        break;
    }
    

    sueldoBruto = parseInt(prompt("Ingrese Sueldo bruto, no menor a 8000."));

    while (sueldoBruto <8000 ) {
    sueldoBruto = parseInt(prompt("Error: Ingrese Sueldo bruto, no menor a 8000."));
    }

    document.getElementById('txtIdSueldo').value = sueldoBruto;        
    
    
    numeroLegajo = parseInt(prompt("Ingrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda."));

    while (numeroLegajo <1000 || numeroLegajo > 9999 ) {
    numeroLegajo = parseInt(prompt("Error: Ingrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda."));
    }

    document.getElementById('txtIdLegajo').value = numeroLegajo; 



    nacionalidad = prompt("Ingrese Nacionalidad, “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");

    while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n") {
    nacionalidad = prompt("Error: Ingrese Nacionalidad, “a” para argentinos, “e” para extranjeros, “n” para nacionalizados.");
    }
    
    switch(nacionalidad){
        case "a":
        document.getElementById('txtIdNacionalidad').value = "Argentino";
        break;
        case "e":
        document.getElementById('txtIdNacionalidad').value = "Extranjero";
        break;
        default:
        document.getElementById('txtIdNacionalidad').value = "Nacionalizado";
        break;
    }
}