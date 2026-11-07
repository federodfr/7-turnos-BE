const socketClient = io()

socketClient.on("changes-on-service", (service) => {
    console.log(service)
    const acceptReload = confirm("Se han producido cambios. Quiere refrescar el sitio?")
    if(acceptReload){
        location.reload()
    }
})