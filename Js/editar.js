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

$(function()
{
    var Imagen = localStorage.getItem('ImagenElegida');

    if(Imagen === "imagen1")
    {
        $("#imagenusuario").attr("src", 'img/Chad.jpg');
    }
    else if(Imagen === "imagen2")
    {
        $("#imagenusuario").attr("src", 'img/Juan.jpg');
    }
    else if(Imagen === "imagen3")
    {
        $("#imagenusuario").attr("src", 'img/Kanye.jpg');
    }
    else if(Imagen === "imagen4")
    {
        $("#imagenusuario").attr("src", 'img/Elf.jpg');
    }
    else if(Imagen === "imagen5")
    {
        $("#imagenusuario").attr("src", 'img/DankCat.gif');
    }

    var Correo = localStorage.getItem('CorreoC');
    Correo = ("Correo: "+Correo)
    var Usuario = localStorage.getItem('UsuarioC')
    Usuario = ("Usuario: "+Usuario)
    $('#usuarioE').html(Usuario);
    $('#correoE').html(Correo);
})

$("#edimagen").click(function (e) 
{ 
    e.preventDefault();

    var ImgActual = localStorage.getItem('ImagenElegida');

    if(ImgActual == "imagen1")
    {
        $("#imagen1").attr("style", 'display:none;');
        $("#img1").attr("style", 'display:none;');
    }
    else if(ImgActual == "imagen2")
    {
        $("#imagen2").attr("style", 'display:none;');
        $("#img2").attr("style", 'display:none;');
    }
    else if(ImgActual == "imagen3")
    {
        $("#imagen3").attr("style", 'display:none;');
        $("#img3").attr("style", 'display:none;');
    }
    else if(ImgActual == "imagen4")
    {
        $("#imagen4").attr("style", 'display:none;');
        $("#img4").attr("style", 'display:none;');
    }
    else if(ImgActual == "imagen5")
    {
        $("#imagen5").attr("style", 'display:none;');
        $("#img5").attr("style", 'display:none;');
    }

    $("#imagenesdiv").attr("style", 'block');
});

$("#guardarimagen").click(function (e) 
{ 
    e.preventDefault();

        if ($('#imagen1').is(":checked"))
        {
            let Imagen = "imagen1";
            localStorage.setItem('ImagenElegida', Imagen);
            localStorage.setItem('ImagenInicio', Imagen);
        }
        else if ($('#imagen2').is(":checked"))
        {
            let Imagen = "imagen2";
            localStorage.setItem('ImagenElegida', Imagen);
            localStorage.setItem('ImagenInicio', Imagen);
        }
        else if ($('#imagen3').is(":checked"))
        {
            let Imagen = "imagen3";
            localStorage.setItem('ImagenElegida', Imagen);
            localStorage.setItem('ImagenInicio', Imagen);
        }
        else if ($('#imagen4').is(":checked"))
        {
            let Imagen = "imagen4";
            localStorage.setItem('ImagenElegida', Imagen);
            localStorage.setItem('ImagenInicio', Imagen);
        }
        else if ($('#imagen5').is(":checked"))
        {
            let Imagen = "imagen5";
            localStorage.setItem('ImagenElegida', Imagen);
            localStorage.setItem('ImagenInicio', Imagen);
        }
        else
        {
            alert("Elija una imagen");
        }
        $("#imagenesdiv").attr("style", 'display:none;');
        alert("Imagen Guardada")
});

$("#editarinfo").click(function (e) 
{ 
    e.preventDefault();
    
    $("#infodiv").attr("style", 'block');
});

$("#guardarinfo").click(function (e) 
{ 
    e.preventDefault();
    var cont = 0;
    var Correo = $("#correomod").val();
    var Usuario = $("#usuario").val();

    if(Correo != "" && Usuario != "")
    {
        cont = cont + 1;
        localStorage.setItem('UsuarioC', Usuario);
        localStorage.setItem('CorreoC', Correo);
        localStorage.setItem('CorreoIncio', Correo);
        localStorage.setItem('UsuarioInicio', Usuario);
        
    }
    else if(Correo != "" && Usuario === "")
    {
        cont = cont + 1;
        localStorage.setItem('CorreoC', Correo);
        localStorage.setItem('CorreoIncio', Correo);
    }
    else if(Correo === "" && Usuario != "")
    {
        cont = cont + 1;
        localStorage.setItem('UsuarioC', Usuario);
        localStorage.setItem('UsuarioInicio', Usuario);
    }
    else if(Correo === "" && Usuario === "")
    {
        cont = cont + 1;
    }

    if($("#contraseñavieja").val() === "" && $("#contraseña").val() === "" && $("#contraseña2").val() === "")
    {
        cont = cont+1;
    }
    else if($("#contraseñavieja").val() === "" && $("#contraseña").val() != "")
    {
        alert("Ingrese la contraseña antigua")
    }
    else if($("#contraseñavieja").val() === localStorage.getItem('ContraseñaC'))
    {
        var ContraseñaNueva = $("#contraseña").val()
        var ContraseñaVer = $("#contraseña2").val()
        if(ContraseñaNueva === ContraseñaVer)
        {
            if(ContraseñaNueva.length<8)
            {
                console("La contraseña tiene que ser de minimo 8 caracteres")
            }
            else
            {
                cont = cont+1;
                localStorage.setItem('ContraseñaC', ContraseñaNueva);
                localStorage.setItem('ContraseñaIncio', Contraseña);
            }
        }
        else
        {
            console("Las contraseñas no coinciden")
        }
    }
    else
    {
        alert("La contraseña actual no es correcta");
    }
    if(cont == 2)
    {
        window.location.href="usuario.html";
    }
});