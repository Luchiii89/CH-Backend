// CoderHouse - BackEnd - Entregable 1: Clases
// Declarar una clase Usuario
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
// Definir un método para obtener el nombre completo del Usuario
    getFullName() {
        console.log(`El nombre completo es: ${this.nombre} ${this.apellido}.`);
    }
// Definir un método para agregar un nombre a la lista de mascotas
    addMascota(nombreM) {
        this.mascotas.push(nombreM);
        console.log(`Se añadió el nombre ${nombreM} a la lista de mascotas.`);
    }
// Definir un método para obtener la cantidad de mascotas del Usuario
    countMascotas() {
        console.log(`La cantidad de mascotas del Usuario ${this.nombre} es: ${this.mascotas.length}.`);
    }
// Definir un método para agregar un libro a la colección de libros del Usuario
    addBook(nombreL,autor) {
        this.libros.push({nombre: nombreL, autor: autor});
        console.log(`Se añadió el libro ${nombreL}, del autor ${autor} a la colección de libros.`);
    }
// Definir un método para obtener la lista nombres de la colección de libros del Usuario
    getBookNames() {
        console.log(`Los libros de la colección son: ${ this.libros.map((libro) => libro.nombre )} `);
    }
  }

//Crear un objeto llamando a usuario con valores arbitrarios e invocar todos sus métodos.
const Lu = new Usuario("Luciana","Sande",[{nombre:"La Virgen en sus ojos", autor:"Florencia Etcheves"},{nombre:"El Señor de los Anillos",autor:"J.R.R. Tolkien"},{nombre:"Harry Potter y la Piedra Filosofal",autor:"J.K. Rowling"}],["Donna"]);

//Obtengo el nombre completo de Lu
Lu.getFullName();
//Consulto cantidad de mascotas de Lu
Lu.countMascotas();
//Agreggo un nombre a la lista de mascotas de Lu
Lu.addMascota("Mara");
//Vuelvo a consultar la cantidad de mascotas de Lu
Lu.countMascotas();
//Agrego un libro, indicando su nombre y autor, a la lista de colecciones de Lu
Lu.addBook("Harry Potter y el Cáliz de Fuego","J.K. Rowling")
//Consulto los nombres de la colección de libros de Lu
Lu.getBookNames();
