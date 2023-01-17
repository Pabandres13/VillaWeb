
var vp = document.getElementById("villagaby");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "tile.png",
    cargaOk: false
};

var vaca = {
      url: "vaca.png",
      cargaOk: false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};

var lobo = {
    url: "lobo.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarLobos()
{
    lobo.cargaOk = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
        for(var v=0; v < 2; v++)
        {

        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(vaca.imagen, x, y);

        }
        
    }
    if(pollo.cargaOk)
    {
        for(var p=0; p < 2; p++)
        {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(pollo.imagen, x, y);
        }
    }
    if(cerdo.cargaOk)
    {
        for(var c=0; c < 2; c++)
        {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(cerdo.imagen, x, y);
        }
        
    }
    if(lobo.cargaOk)
    {
        var x = aleatorio(0, 420);
        var y = aleatorio(0, 420);
        papel.drawImage(lobo.imagen, x, y);
    }

}

