"use strict" // ACTIVA EL MODO ESTRICTO, garantiza que el codigo tenga buenas practicas de escritura 

//referenciamos el lenguaje svg por estar en un documento externo o not inlined
const svgNS = "http://www.w3.org/2000/svg";
const w = document.documentElement.scrollWidth ;//resto 3px para que no salgan los scroll del navegador
const h = document.documentElement.scrollHeight;
const svg = document.querySelector('svg');


function pantallaConf() { //asigno los atributos width, height y viewbox del svg que muestro en mi html 
    svg.setAttribute("width", w-10);
    svg.setAttribute("height", h-10);
    svg.setAttribute("viewBox", `-10 -10 ${w} ${h}`);//empiezo en -3 -3 para mantener los 3 que reste' por el scroll
}

function pared(...coordenadas) {
    try {
        if (coordenadas.length <= 2 || coordenadas.length % 2 != 0) {
            throw "Parametros insuficientes";
        } else {
            var wall = document.createElementNS(svgNS, "path");
            wall.setAttribute('stroke', 'red');
            wall.setAttribute('stroke-width', 3);
            var dParametro = "M ";
            var c = 0;
            for (let i in coordenadas) {
                dParametro += coordenadas[i] + " ";
                c++;
                dParametro = c == 2 ? dParametro += " L " : dParametro;
            }
            wall.setAttribute('d', dParametro);
            var svg = document.querySelector('svg');
            svg.appendChild(wall);
        }
    }
    catch (e) {
        switch (e) {
            case "Parametros insuficientes":
                console.log("Error: Parámetros insuficientes, digíte una cantidad par con más de tres coordenadas");
                break;
            default:
                console.log(e);
        }

    }
}
function areaTrabajo(mAncho, mAlto) {
    var metro = h / mAlto;
    var anchoMetros = mAncho * metro;
    var altoMetros = mAlto * metro;
    pared(0, 0, anchoMetros-4, 0, anchoMetros-4, altoMetros-4, 0, altoMetros-4, 0, 0);
}
pantallaConf();
areaTrabajo(16, 10);
pared(0, 0, w, h);
pared(0, h, w, 0);


