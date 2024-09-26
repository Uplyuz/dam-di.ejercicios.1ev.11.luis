const libro = {
    titulo: "1984",
    paginas: 328
   };

const { titulo: nombreLibro, autor = "Anónimo" } = libro;


console.log(nombreLibro,autor)