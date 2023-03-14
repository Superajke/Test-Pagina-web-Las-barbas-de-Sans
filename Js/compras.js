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

$("#agregarproductos").click(function (e) { 
    e.preventDefault();
    
    var DoveP = 20000, GelP = 15000, CuchillaP = 30000, BeerdsP = 40000;
    let Dove = $("#dove").val();
    let Gel = $("#gel").val();
    let Cuchilla = $("#cuchillas").val();
    let Beerds = $("#beerds").val();

    DoveP = (DoveP*Number(Dove));
    GelP = (GelP*Number(Gel));
    CuchillaP = (CuchillaP*Number(Cuchilla));
    BeerdsP = (BeerdsP*Number(Beerds));
    let Cadena="";

    if(DoveP!=0 && GelP!=0 && CuchillaP!=0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  Gel para el cabello para hombre 'Casual Hold' X"+Gel+
                     ",  Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla+
                     ",  BEERDS Mantequilla para barba X"+Beerds
    }
    else if(DoveP===0 && GelP!=0 && CuchillaP!=0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Gel para el cabello para hombre 'Casual Hold' X"+Gel+
                     ",  Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla+
                     ",  BEERDS Mantequilla para barba X"+Beerds
    }
    else if(DoveP!=0 && GelP===0 && CuchillaP!=0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla+
                     ",  BEERDS Mantequilla para barba X"+Beerds
    }
    else if(DoveP!=0 && GelP!=0 && CuchillaP===0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  Gel para el cabello para hombre 'Casual Hold' X"+Gel+
                     ",  BEERDS Mantequilla para barba X"+Beerds
    }
    else if(DoveP!=0 && GelP!=0 && CuchillaP!=0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  Gel para el cabello para hombre 'Casual Hold' X"+Gel+
                     ",  Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla
    }
    else if(DoveP!=0 && GelP===0 && CuchillaP===0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove
    }
    else if(DoveP!=0 && GelP!=0 && CuchillaP===0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  Gel para el cabello para hombre 'Casual Hold' X"+Gel
    }
    else if(DoveP!=0 && GelP===0 && CuchillaP!=0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla
    }
    else if(DoveP!=0 && GelP===0 && CuchillaP===0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                     "Men+Care Dove X"+Dove+
                     ",  BEERDS Mantequilla para barba X"+Beerds
    }
    else if(DoveP===0 && GelP!=0 && CuchillaP===0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                 "Gel para el cabello para hombre 'Casual Hold' X"+Gel
    }
    else if(DoveP===0 && GelP!=0 && CuchillaP!=0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                 "Gel para el cabello para hombre 'Casual Hold' X"+Gel+
                 ",  Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla
    }
    else if(DoveP===0 && GelP!=0 && CuchillaP===0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                 "Gel para el cabello para hombre 'Casual Hold' X"+Gel+
                 ",  BEERDS Mantequilla para barba X"+Beerds
    }
    else if(DoveP===0 && GelP===0 && CuchillaP!=0 && BeerdsP===0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                 "Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla
    }
    else if(DoveP===0 && GelP===0 && CuchillaP!=0 && BeerdsP!=0)
    {
        Cadena = "<h5>Productos adquiridos:</h5> "+
                 "Gillette Recambios de cuchillas de afeitar para hombre X"+Cuchilla+
                 ",  BEERDS Mantequilla para barba X"+Beerds
    }
    $('#infoproductos').html(Cadena);
    localStorage.setItem('CompraP', Cadena);
    localStorage.setItem('CompraCerrar', Cadena);
    let Total = DoveP+GelP+CuchillaP+BeerdsP;

    if(Total===0)
    {
        $("#dircompra").attr("style", 'display:none;');
        alert("Por favor elija un producto");
    }
    else
    {
        alert("Productos Agregados")
        $('#totalpagar').html("Para un total de: $"+Total); 
        $("#dircompra").attr("style", 'display:block;'); 
    }
});

$("#ingresarinfo").click(function (e) 
{ 
    e.preventDefault();

    let Nombre = $("#firstName").val();
    let Apellido = $("#lastName").val();
    let Correo = $("#email").val();
    let Direccion = $("#address").val();
    let Departamento = $("#departamento").val();
    let Ciudad = $("#state").val();
    let ZIP = $("#zip").val();
    var expresion = /[0-9]/;
    var correoexpres = /\w+@\w+\.+[a-z]/;

    if(Nombre === "" || Apellido === "" || Correo === "" || Direccion === "" || Departamento === "" || Ciudad === "" || ZIP === "")
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
    else if(!correoexpres.test(Correo))
    {
        alert("El correo no es válido");
    }
    else
    {
        alert("Información de envío guardada")
        $("#infopago").attr("style", 'block');
        $("#dircompra").attr("style", 'display:none;');   
    }
});

$("#realizarpago").click(function (e) { 
    e.preventDefault();

    let NombreTarj = $("#cc-name").val();
    let NumeroTar = $("#cc-number").val();
    let Expiracion = $("#cc-expiration").val();
    let CVV = $("#cc-cvv").val();
    let cont = 0;
    if($('#debit').is(":checked"))
    {
        cont++;
    }
    else if($('#credit').is(":checked"))
    {
        cont++;
    }
    else
    {
        alert("Seleccione el tipo de tarjeta")
    }

    if(NombreTarj === "" || NumeroTar === "" || Expiracion === "" || CVV === "")
    {
        alert("Todos los datos de la tarjeta son necesarios")
    }
    else
    {
        cont++;
    }

    if(cont === 2)
    {
        alert("Compra realizada con éxito")
        window.location.href="index.html";
    }
});