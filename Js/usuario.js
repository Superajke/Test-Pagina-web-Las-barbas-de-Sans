$(function()
{
    let info = Number(localStorage.getItem('IniciosesionC'))
    if(info === 1)
    {
        $('#bienvenida').html("Ver perfil");
        $('#reservas').html(localStorage.getItem('ReservaG'));
        $('#compras').html(localStorage.getItem('CompraP'));        
    }
    else
    {
        $('#bienvenida').html("Iniciar sesion");
    }
    var Imagen = localStorage.getItem('ImagenElegida');

    if(Imagen === "imagen1")
    {
        $("#imagenusuario").attr("src", 'img/Chad.jpg');
        $("#imgusuario").attr("src", 'img/Chad.jpg');
    }
    else if(Imagen === "imagen2")
    {
        $("#imagenusuario").attr("src", 'img/Juan.jpg');
        $("#imgusuario").attr("src", 'img/Juan.jpg');
    }
    else if(Imagen === "imagen3")
    {
        $("#imagenusuario").attr("src", 'img/Kanye.jpg');
        $("#imgusuario").attr("src", 'img/Kanye.jpg');
    }
    else if(Imagen === "imagen4")
    {
        $("#imagenusuario").attr("src", 'img/Elf.jpg');
        $("#imgusuario").attr("src", 'img/Elf.jpg');
    }
    else if(Imagen === "imagen5")
    {
        $("#imagenusuario").attr("src", 'img/DankCat.gif');
        $("#imgusuario").attr("src", 'img/DankCat.gif');
    }
    else
    {
        $("#imgusuario").attr("src", 'img/LogInIcon.png');
    }
});

$(function()
{
    var Usuario = localStorage.getItem('UsuarioC')
    Usuario = "<h4>Bienvenido "+Usuario+"</h4>"
    $('#bienvenida').html(Usuario);

    var Imagen = localStorage.getItem('ImagenElegida');

    if(Imagen === "imagen1")
    {
        $("#imagenusuario").attr("src", 'img/Chad.jpg');
        $("#imgusuario").attr("src", 'img/Chad.jpg');
    }
    else if(Imagen === "imagen2")
    {
        $("#imagenusuario").attr("src", 'img/Juan.jpg');
        $("#imgusuario").attr("src", 'img/Juan.jpg');
    }
    else if(Imagen === "imagen3")
    {
        $("#imagenusuario").attr("src", 'img/Kanye.jpg');
        $("#imgusuario").attr("src", 'img/Kanye.jpg');
    }
    else if(Imagen === "imagen4")
    {
        $("#imagenusuario").attr("src", 'img/Elf.jpg');
        $("#imgusuario").attr("src", 'img/Elf.jpg');
    }
    else if(Imagen === "imagen5")
    {
        $("#imagenusuario").attr("src", 'img/DankCat.gif');
        $("#imgusuario").attr("src", 'img/DankCat.gif');
    }

    var NombreCompleto = localStorage.getItem('NombreC');
    NombreCompleto = ("Nombre: "+NombreCompleto)
    var Correo = localStorage.getItem('CorreoC');
    Correo = ("Correo: "+Correo)
    $('#nombrecompleto').html(NombreCompleto);
    $('#correo').html(Correo);
    var Reserva = localStorage.getItem('ReservaG');
    $('#reservas').html(Reserva);
    var Compra = localStorage.getItem('CompraP');
    $('#compras').html(Compra);
})

$("#bienvenida").click(function (e) 
{ 
    e.preventDefault();
    let info = Number(localStorage.getItem('IniciosesionC'))
    if(info === 1)
    {
        window.location.href="usuario.html";
    }
    else
    {
        window.location.href="iniciarsesion.html";
    }
});

$("#Regresar").click(function (e) { 
    e.preventDefault();
        localStorage.setItem('NombreC', null);
        localStorage.setItem('CorreoC', null);
        localStorage.setItem('UsuarioC', null);
        localStorage.setItem('ContraseñaC', null);
        localStorage.setItem('IniciosesionC', null);
        localStorage.setItem('ImagenElegida', null);
        localStorage.setItem('ReservaG', "No hay reservas actuales");
        localStorage.setItem('CompraP', "No hay compras actuales")
        window.location.href="index.html";
});