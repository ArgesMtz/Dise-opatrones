class Netflix {
    constructor() {
      if (Netflix.instance) {
        return Netflix.instance;
      }
      Netflix.instance = this;
      this.catalogo = [];
    }
  
    agregarPelicula(pelicula) {
      this.catalogo.push(pelicula);
    }
  
    mostrarCatalogo() {
      console.log("Catálogo de Netflix:");
      for (let i = 0; i < this.catalogo.length; i++) {
        console.log("- " + this.catalogo[i]);
      }
    }
  }
  
  // Creamos una instancia de la clase "Netflix"
  const netflix1 = new Netflix();
  netflix1.agregarPelicula("Anabballe");
  netflix1.agregarPelicula("John Wick");
  
  // Creamos otra instancia de la clase "Netflix"
  const netflix2 = new Netflix();
  netflix2.agregarPelicula("Your Name");
  netflix2.agregarPelicula("Stranger Things");
  
  // Mostramos el catálogo de ambas instancias de "Netflix"
  netflix1.mostrarCatalogo();
  netflix2.mostrarCatalogo();
  
  