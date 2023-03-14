$(function()
{
    let info = Number(localStorage.getItem('IniciosesionC'))
    if(info === 1)
    {
        $('#bienvenida').html("Ver perfil");
        $("#informacionreserva").attr("style", 'block');
    }
    else
    {
        $("#iniciarsesion").attr("style", 'block');
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

$(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate()+2;
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;

    // or instead:
    // var maxDate = dtToday.toISOString().substr(0, 10);

    $('#txtDate').attr('min', maxDate);
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

$("#continuarpago").click(function (e) 
{ 
    e.preventDefault();
    Dia = $("#fechareserva").val();
    Hora = $("#horareserva").val();
    Sede = $("#lugarreserva").val();
    Servicio = $("#servicioreserva").val();
    if(Dia === "")
    {
        alert("Por favor elija el dia de la reserva")
    }
    
    else if(Hora === "")
    {
        alert("Por favor elija la hora de la reserva")
    }
    else if(Sede === "")
    {
        alert("Por favor elija la sede de la reserva")
    }
    else if(Servicio === "")
    {
        alert("Por favor elija el servicio deseado")
    }
    else if(Servicio === "Corte")
    {
        Precio = "$15.000"
        InfoRes = "Dia de la reserva " + Dia + " a las " + Hora + ", en la sede '" + Sede + "'', para el servicio de '" +Servicio +"'";
        $('#totalpagar').html("Para un total de: "+Precio);
        $("#zonapago").attr("style", 'block');
        $('#inforeserva').html(InfoRes);
    }
    else if(Servicio === "Barba")
    {
        Precio = "$10.000"
        InfoRes = "Dia de la reserva " + Dia + " a las " + Hora + ", en la sede '" + Sede + "', para el servicio de '" +Servicio +"'";
        $('#totalpagar').html("Para un total de: "+Precio);
        $("#zonapago").attr("style", 'block');
        $('#inforeserva').html(InfoRes);
    }
    else if(Servicio === "Corte + Barba")
    {
        Precio = "$20.000"
        InfoRes = "Dia de la reserva " + Dia + " a las " + Hora + ", en la sede '" + Sede + "', para el servicio de '" +Servicio +"'";
        $('#totalpagar').html("Para un total de: "+Precio);
        $("#zonapago").attr("style", 'block');
        $('#inforeserva').html(InfoRes);
    }
    else if(Servicio === "Corte + Barba + Cejas")
    {
        Precio = "$30.000"
        InfoRes = "Dia de la reserva " + Dia + " a las " + Hora + ", en la sede '" + Sede + "', para el servicio de '" +Servicio +"'";
        $('#totalpagar').html("Para un total de: "+Precio);
        $("#zonapago").attr("style", 'block');
        $('#inforeserva').html(InfoRes);
    }
    localStorage.setItem('ReservaG', InfoRes);
    localStorage.setItem('ReservaCerrar', InfoRes);
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
        alert("Reserva realizada con éxito")
        window.location.href="index.html";
    }
});