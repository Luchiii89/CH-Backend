const container = require("./clases");

const productos = new container("./productos.txt");

productos.save({
  title: "monitor",
  price: "8700",
  thumbnail: "https://www.lg.com/es/images/monitores/md07532390/gallery/Dm-02.jpg",
});

// productos.getByID(3);
// podría usar también: productos.getById(2).then((data) => console.log(data));

// productos.getAll();
// podría usar también: productos.getAll().then((data) => console.log(data));

// productos.deleteById(4);

// productos.deleteAll();