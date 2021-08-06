class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for(var bi of caja)
    {
        
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }

            else
            {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if(dinero > 0)
    {
        r.innerHTML = "Soy un cajero pobre, no tengo dinero :(";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                r.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br>";
            }
        }
    }
}

function cleantransactions()
{
    r.innerHTML = ""
    dinero = 0;
    div = 0;
    papeles = 0;
}

var caja = [];
var entregado = [];

caja.push(new Billete(100, 10));
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 1));

var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var cleanresult = document.getElementById("limpiar");
cleanresult.addEventListener("click", cleantransactions);