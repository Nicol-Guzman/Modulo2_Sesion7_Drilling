var opcion = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"));

//FUNCIONES

switch (opcion) {
    case 1:
        var optmenu1 = parseInt(prompt("Seleccione una opción:\n1.-Ver Boleta\n2.- Pagar cuenta"));
        if (optmenu1 === 1) {
            alert("Haga click aquí para descargar su boleta.");
        } else if (optmenu1 === 2) {
            alert("Usted esta siendo transferido. Espere por favor...")
        } else {
            alert("Ha ocurrido un error!")
        }
        break;
    case 2:
        var optmenu2 = parseInt(prompt("Seleccione una opción:\n1.-Problemas con la señal\n2.-Problemas con la señal"));
        if (optmenu2 === 1 || optmenu2 === 2) {
            var solicitud = prompt("A continuación escriba su solicitud:");
            alert(`Estimado usuario, su solicitud: '${solicitud}' ha sido ingresda con éxito. Pronto será contactado por uno de nuestros ejecutivos.`)
        } else {
            alert("Ha ocurrido un error!")
        }
        break;
    case 3:
        var optmenu3 = prompt("¡Mantel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamara. De lo contrario ingrese 'NO'")
        if (optmenu3 === 'SI') {
            alert("Un ejecutivo se contactara con usted")
        } else if (optmenu3 === 'NO') {
            alert("Gracias por preferir nuestros servicios")
        } else {
            alert("Ha ocurrido un error!")
        }
        break;
    case 4:
        var consulta = prompt("A continuación escriba su consulta:");
        alert(`Estimado usuario, su solicitud: '${consulta}' ha sido ingresda con éxito. Pronto será contactado por uno de nuestros ejecutivos.`)
        break;
    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios")
        break;
}