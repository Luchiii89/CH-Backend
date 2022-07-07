const fs = require("fs");

//Defino la clase Container
class Container {
    constructor(fileName) {
        this.fileName = fileName;
    }

    //Save: Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    async save(file) {
        try {
            //Leo el archivo y lo guardo en una var
            const existingInfo = JSON.parse(
                await fs.promises.readFile(this.fileName, "utf-8")
            );
            console.log("Archivo: ", existingInfo);
            //Si existe el archivo, busco el último id y le sumo 1 para asignarlo al prod nuevo
            file.id = existingInfo[existingInfo.length - 1].id + 1;
            //Agrego el producto al array
            existingInfo.push(file);
            //Sobreescribo el archivo con todos los prods
            await fs.promises.writeFile(this.fileName, JSON.stringify(existingInfo));
            console.log("Se agregó con éxito el nuevo producto.");
            //Devuelvo el id del nuevo producto
            console.log("El id del nuevo producto es: " + file.id);
        } catch (err) {
            console.log("Se ha producido un error: ", err);
            //Si el archivo no existe, creo uno con id = 1
            if (err.errno === -4058) {
                file.id = 1;
                await fs.promises.appendFile(this.fileName, JSON.stringify([file]));
                console.log("¡Archivo Creado!");
            }
        }
    }

    //getById: Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getByID(id) {
        try {
            //Leo el archivo y lo guardo en una var
            const existingInfo = JSON.parse(
                await fs.promises.readFile(this.fileName, "utf-8")
            );
            //Busco en el archivo el producto con el id indicado 
            const selectedProduct = existingInfo.find(
                (product) => product.id === id
            );
            //Si no existe, lo informo
            if (selectedProduct === undefined) {
                console.log("El producto seleccionado no existe");
            } else {
                //Si existe, lo muestro
                console.log("Producto seleccionado por ID:", existingInfo);
            }
        } catch (err) {
            console.log("Se ha producido un error: ", err);
            if (err.errno === -4058) {
                console.log("El archivo seleccionado no existe.");
            }
        }
    }

    //getAll: Devuelve un array con los objetos presentes en el archivo.
    async getAll() {
        try {
            //Leo el archivo y lo guardo en una var
            const existingInfo = JSON.parse(
                await fs.promises.readFile(this.fileName, "utf-8")
            );
            //SE MUESTRA LA INFO DEL ARCHIVO EN CONSOLA
            console.log("Info del archivo seleccionado: ", existingInfo);
        } catch (err) {
            console.log("Se ha producido un error: ", err);
            if (err.errno === -4058) {
                console.log("El archivo seleccionado no existe");
            }
        }
    }

    //deleteById: Elimina del archivo el objeto con el id buscado.
    async deleteById(id) {
        try {
            //Leo el archivo y lo guardo en una var
            const existingInfo = JSON.parse(
                await fs.promises.readFile(this.fileName, "utf-8")
            );
            //Busco el índice del producto seleccionado para eliminar.
            const indexToDelete = existingInfo.findIndex(
                (producto) => producto.id === id
            );
            //Si no existe, lo informo.
            if (indexToDelete === -1) {
                console.log("El producto seleccionado no existe.");
            } else {
                //Si existe, lo muestro y luego lo elimino.
                console.log("Producto a eliminar: ", existingInfo[indexToDelete]);
                existingInfo.splice(indexToDelete, 1);
                console.log("El producto seleccionado fue eliminado.");
                await fs.promises.writeFile(
                    this.fileName,
                    JSON.stringify(existingInfo)
                );
            }
        } catch (err) {
            console.log("Se ha producido un error:", err);
            if (err.errno === -4058) {
                console.log("El archivo seleccionado no existe.");
            }
        }
    }

    //deleteAll: Elimina todos los objetos presentes en el archivo
    async deleteAll() {
        try {
            //Intento borrar el archivo y muestro un mensaje exitoso o un mensaje de error con el mismo.
            await fs.promises.unlink(this.fileName);
            console.log("¡Archivo borrado exitosamente.");
        } catch (err) {
            console.log("Se ha producido un error: ", err);
            if (err.errno === -4058) {
                console.log("El archivo seleccionado no existe.");
            }
        }
    }
}

//lo explortamos para utilizarlo en tests
module.exports = Container;