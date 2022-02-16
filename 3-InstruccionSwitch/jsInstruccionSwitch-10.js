function mostrar()
{
	let estacion 
	let destino
	let precioBase
	let mensaje

	estacion = document.getElementById('txtIdEstacion').value
	destino = document.getElementById('txtIdDestino').value 
	precioBase = 15000

	switch(estacion){
		case "Invierno":
		switch(destino){
			case "Bariloche":
			precioBase = precioBase + precioBase * 20/100;		
			break;

			case "Cataratas":
			case "Cordoba":
			precioBase = precioBase - precioBase * 10/100;
			break;

			case "Mar del plata":
			precioBase = precioBase - precioBase * 20/100;
			}
		break;

		case "Verano":
		switch(destino){
			case "Bariloche":
			precioBase = precioBase - precioBase * 20/100;		
			break;

			case "Cataratas":
			case "Cordoba":
			precioBase = precioBase + precioBase * 10/100;
			break;

			case "Mar del plata":
			precioBase = precioBase + precioBase * 20/100;
			}
		break;

		case "Otoño":
		case "Primavera":
		switch(destino){
			case "Bariloche":
			precioBase = precioBase + precioBase * 10/100;		
			break;

			case "Cataratas":
			precioBase = precioBase + precioBase * 10/100;
			break;

			case "Mar del plata":
			precioBase = precioBase + precioBase * 10/100;
			break;

			case "Cordoba":
			precioBase;
			break;
			}
	}
	
	mensaje = "El precio para " +destino+ " en " +estacion+ " es de $" +precioBase;
	alert(mensaje);



}//FIN DE LA FUNCIÓN