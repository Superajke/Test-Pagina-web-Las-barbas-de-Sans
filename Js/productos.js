$(function()
{
    let info = Number(localStorage.getItem('IniciosesionC'))
    if(info === 1)
    {
        $('#bienvenida').html("Ver perfil");
        $("#productoscompra").attr("style", 'block');
    }
    else
    {
        $('#bienvenida').html("Iniciar sesion");
        $("#iniciarsesion").attr("style", 'block');
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

$("#btncalificar").click(function (e) 
{ 
    e.preventDefault();
    
    $("#btncalificar").attr("style", 'display:none;');
    $("#calificar").attr("style", 'display:block;');
    $("#textoescritura").attr("style", '');
    
    
});

$("#agregarproductos").click(function (e) 
{ 
    e.preventDefault();
    var Persona = localStorage.getItem('NombreC');
    var Productos = $("#productoscal").val();
    var Servicios = $("#servicioscal").val();
    var Personal = $("#personalcal").val();
    var Sedes = $("#sedescal").val();
    var Comentarios = $("#comentarioscal").val();
    
    if(Comentarios === "")
    {
        Comentarios = "N/A"
    }

    $("#tabla").attr("style", 'block');
    var Registro =  "<tr>" +
                    "<td>" + Persona + "</td>" +
                    "<td>" + Productos + "</td>" +
                    "<td>" + Servicios + "</td>" +
                    "<td>" + Personal + "</td>" +
                    "<td>" + Sedes + "</td>" +
                    "<td>" + Comentarios + "</td>" +
                    "</tr>"
    $("#tabla tbody").append(Registro);
});