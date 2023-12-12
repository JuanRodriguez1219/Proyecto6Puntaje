const marcoPuntaje = document.querySelector('.puntaje');
let puntajeActual = 0;
const puntajeLimite = 5;

const html = Array.from(Array(puntajeLimite)).map((item, i) => {/*Metodo de array, construccion de una regla - Map: Dibujar en html - i: Posiciones*/
    return `<div class="item item-${i}" data-pos="${i}"></div>`;/*Construccion de las 5 divisiones*/
});
marcoPuntaje.innerHTML = html.join('');/*Une los elementos de una matriz o similar en cada y devuelve la cadena*/

document.querySelectorAll(".item").forEach(item => {/*Devuelve un NodeList estatica, representando una lista de elementos - Método de arrays se utiliza para recorrer una colección y devolver un valor al terminar*/
    item.addEventListener("mouseover", (e) => { /*Cuando se pasa el mouse por encima*/
        //console.log("Funciona");
        const posicion = item.getAttribute("data-pos");/*De la clase llamada, traigame un dato en especifico*/

        if (puntajeActual === parseInt(posicion) +1) {/*===Comparación estricta - Lo convierte de un tipo de dato a otro ej String a Int*/
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris => {/*ForEach: Método de arrays se utiliza para recorrer una colección y devolver un valor al terminar*/
            if (cuadraditoGris.classList.contains("selec")) {/*Seleccione el contenido*/
                cuadraditoGris.classList.remove("selec");/*Remueva el contenido, para poder desplazar el cursor de nuevo*/

            }
        });

        for (let i = 0; i <= posicion; i++) {/*Depende de la posicion, y que aumente de 1 en 1*/
            const cuadradito = document.querySelector(`.item-${i}`);/*Guarda el indice*/
            if (!cuadradito.classList.contains("selec")) {/*Diferente de*/
                cuadradito.classList.add("selec");
            }
        }
        puntajeActual = parseInt(posicion) +1;
    });

    item.addEventListener("click", (e) => {
        const posicion = item.getAttribute("data-pos");
        puntajeActual = parseInt(posicion) +1;
        console.log(puntajeActual);
    });
});