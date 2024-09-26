const persona = {
    nombre: "Ana",
    edad: 28,
    direccion: {
    ciudad: "Madrid",
    codigoPostal: "28001"
    }
   };

const {
    nombre,
    edad,
    direccion:{ciudad}
}=persona
console.log(nombre,edad,ciudad)