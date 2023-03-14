$("#iniciarsesion").click(function (e) 
{ 
    e.preventDefault();
    
    let NombreCompleto = localStorage.getItem('NombreInicio');
    let Correo = localStorage.getItem('CorreoIncio');
    let Usuario = localStorage.getItem('UsuarioInicio');
    let Contraseña = localStorage.getItem('ContraseñaIncio');
    let Imagen = localStorage.getItem('ImagenInicio');
    let Reserva = localStorage.getItem('ReservaCerrar');
    let Compra = localStorage.getItem('CompraCerrar');

    localStorage.setItem('ImagenElegida', Imagen);


    if($("#floatingInput").val() === "" || $("#floatingPassword").val() === "")
    {
        alert("Por favor ingrese su información")
    }
    else if($("#floatingInput").val() === Correo && $("#floatingPassword").val() === Contraseña)
    {
        let Iniciosesion = 1;
        localStorage.setItem('NombreC', NombreCompleto);
        localStorage.setItem('CorreoC', Correo);
        localStorage.setItem('UsuarioC', Usuario);
        localStorage.setItem('ContraseñaC', Contraseña);
        localStorage.setItem('IniciosesionC', Iniciosesion);
        localStorage.setItem('ReservaG', Reserva);
        localStorage.setItem('CompraP', Compra);
        window.location.href="usuario.html";
    }
    else
    {
        alert("Información incorrecta")
    }
});