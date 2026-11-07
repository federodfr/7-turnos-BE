const socketClient = io()

socketClient.on("changes-on-bookings", (booking) => {
    console.log(booking)
    const acceptReload = confirm("Se han producido cambios. Quiere refrescar el sitio?")
    if(acceptReload){
        location.reload()
    }
})