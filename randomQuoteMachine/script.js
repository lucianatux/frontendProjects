// el arreglo con las frases y autores
const frases = [
    {
      frase: "Hasta la persona más pequeña puede cambiar el curso del futuro",
      autor: "Galadriel"
    },
    {
      frase: "El guerrero sabe que está esperando, y mientras espera, no pierde el tiempo; juega con lo que tiene a su alcance.",
      autor: "Don Juan Matus"
    },
    {
      frase: "Todo lo que tenemos que decidir es qué hacer con el tiempo que se nos da",
      autor: "Gandalf"
    },
    {
      frase: "Todo en la existencia es un ser en sí mismo, no hay grandes ni pequeños, no hay mejores ni peores, sólo hay seres.",
      autor: "Don Juan Matus"
    },
    {
      frase: "La verdad es una tierra sin caminos",
      autor: "Jiddu Krishnamurti"
    },
    {
      frase: "No hay nada bueno ni malo, es el pensamiento humano el que lo hace aparecer así.",
      autor: "William Shakespeare"
    },
    {
      frase: "La libertad y el amor son inseparables",
      autor: "Jiddu Krishnamurti"
    },
    {
      frase: "La felicidad no puede encontrarse a través del esfuerzo o de la búsqueda de la satisfacción, sino sólo como resultado de un estado de ser.",
      autor: "Jiddu Krishnamurti"
    },
    {
      frase: "No hay camino para la paz, la paz es el camino.",
      autor: "Silo"
    },
    {
        frase: "La luz que buscas se encuentra dentro de ti mismo. Si no la encuentras ahí, difícilmente la encontrarás en algún otro lugar.",
        autor: "Rumi"
    },
    {
        frase: "Tu tarea no es buscar el amor, sino simplemente buscar y encontrar todas las barreras dentro de ti que has construido contra él.",
        autor: "Rumi"
    },
    {
      frase: "La humanidad está atravesando una crisis que sólo puede ser superada por la comprensión de que la felicidad no es un bien personal, sino que depende de la felicidad de todos los seres humanos.",
      autor: "Silo"
    }
  ];

  // Función que elige una frase aleatoria
function getRandomQuote() {
    const indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }

  // Función que imprime la frase y el autor en dos párrafos diferentes
function printQuoteAndAuthor() {
    const fraseAzar = getRandomQuote();
    document.getElementById("text").innerHTML = `"${fraseAzar.frase}"`;
    document.getElementById("author").innerHTML = fraseAzar.autor;
  }

  // Llamada a la función
  printQuoteAndAuthor();

  // Botón new-quote
  const btnNuevaFrase = document.getElementById("new-quote");
btnNuevaFrase.addEventListener("click", function() {
  printQuoteAndAuthor();
});