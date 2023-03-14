$(function()
{
    let info = Number(localStorage.getItem('IniciosesionC'))
    if(info === 1)
    {
        $('#bienvenida').html("Ver perfil");
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
        $("#imgusuario").attr("src", 'img/LogInIcon.png');
        $("#imgusuario").attr("class", '');
        $("#imgusuario").attr("width", '30');
    }
});
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

$("#btnsedeLaureles").click(function (e) { 
    e.preventDefault();
    $("#sedeLaureles").attr("style", 'display:block;');
    $("#sedeBello").attr("style", 'display:none;');
    $("#sedePoblado").attr("style", 'display:none;');
});

$("#btnsedeBello").click(function (e) { 
    e.preventDefault();
    $("#sedeLaureles").attr("style", 'display:none;');
    $("#sedeBello").attr("style", 'display:block;');
    $("#sedePoblado").attr("style", 'display:none;');
});
$("#btnsedePoblado").click(function (e) { 
    e.preventDefault();
    $("#sedeLaureles").attr("style", 'display:none;');
    $("#sedeBello").attr("style", 'display:none;');
    $("#sedePoblado").attr("style", 'display:block;');
});