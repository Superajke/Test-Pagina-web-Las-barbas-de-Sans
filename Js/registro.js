$(function()
{
    $("#BTNregistrarse").click(function (e) 
    { 
        e.preventDefault();
        let Nombre = $("#firstName").val();
        let Apellido = $("#lastName").val();
        let Correo = $("#email").val();
        let Contraseña = $("#contraseña").val();
        var Usuario = $("#usuario").val()
        let Iniciosesion = null;
        let cont = 0;

        var expresion = /[0-9]/;
        var correoexpres = /\w+@\w+\.+[a-z]/;

        if(Nombre === "" || Apellido === "" || Contraseña === "" || Correo === "" || Usuario === "")
        {
            alert("Todos los campos son obligatorios");
        }
        else if(expresion.test(Nombre))
        {
            alert("El nombre solo puede tener letras");
        }
        else if(expresion.test(Apellido))
        {
            alert("El apellido solo puede tener letras");
        }
        else if(Contraseña.length<8)
        {
            alert("La contraseña tiene que ser de minimo 8 caracteres")
        }
        else if(!correoexpres.test(Correo))
        {
            alert("El correo no es válido");
        }
        else
        {
            if ($('#imagen1').is(":checked"))
            {
                let Imagen = "imagen1";
                localStorage.setItem('ImagenInicio', Imagen);
                localStorage.setItem('ImagenElegida', Imagen);
                cont = cont+1;
            }
            else if ($('#imagen2').is(":checked"))
            {
                let Imagen = "imagen2";
                localStorage.setItem('ImagenInicio', Imagen);
                localStorage.setItem('ImagenElegida', Imagen);
                cont = cont+1;
            }
            else if ($('#imagen3').is(":checked"))
            {
                let Imagen = "imagen3";
                localStorage.setItem('ImagenInicio', Imagen);
                localStorage.setItem('ImagenElegida', Imagen);
                cont = cont+1;
            }
            else if ($('#imagen4').is(":checked"))
            {
                let Imagen = "imagen4";
                localStorage.setItem('ImagenInicio', Imagen);
                localStorage.setItem('ImagenElegida', Imagen);
                cont = cont+1;
            }
            else if ($('#imagen5').is(":checked"))
            {
                let Imagen = "imagen5";
                localStorage.setItem('ImagenInicio', Imagen);
                localStorage.setItem('ImagenElegida', Imagen);
                cont = cont+1;
            }
            else
            {
                alert("Elija una imagen");
            }
        }

        if(cont==1)
        {
            let NombreCompleto = (Nombre+" "+Apellido);
            Iniciosesion = 1;
            localStorage.setItem('NombreInicio', NombreCompleto);
            localStorage.setItem('CorreoIncio', Correo);
            localStorage.setItem('UsuarioInicio', Usuario);
            localStorage.setItem('ContraseñaIncio', Contraseña);


            localStorage.setItem('NombreC', NombreCompleto);
            localStorage.setItem('CorreoC', Correo);
            localStorage.setItem('UsuarioC', Usuario);
            localStorage.setItem('ContraseñaC', Contraseña);
            localStorage.setItem('IniciosesionC', Iniciosesion);
            window.location.href="usuario.html";
        }
    });
});