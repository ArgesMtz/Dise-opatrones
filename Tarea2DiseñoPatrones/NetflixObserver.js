//Martinez Chavez Arges EXP,315460

class Netflix {
    constructor() {
      this.catalogo = [];
      this.subscriptores = [];
    }
  
    agregarPelicula(pelicula) {
      this.catalogo.push(pelicula);
      this.notificarSubscriptores();
    }
  
    removerPelicula(pelicula) {
      const index = this.catalogo.indexOf(pelicula);
      if (index >= 0) {
        this.catalogo.splice(index, 1);
        this.notificarSubscriptores();
      }
    }
  
    notificarSubscriptores() {
      for (let i = 0; i < this.subscriptores.length; i++) {
        this.subscriptores[i].actualizar(this.catalogo);
      }
    }
  
    agregarSubscriptor(subscriptor) {
      this.subscriptores.push(subscriptor);
    }
  
    removerSubscriptor(subscriptor) {
      const index = this.subscriptores.indexOf(subscriptor);
      if (index >= 0) {
        this.subscriptores.splice(index, 1);
      }
    }
  }
  
  class Portada {
    constructor(netflix) {
      this.netflix = netflix;
      this.peliculas = [];
      this.netflix.agregarSubscriptor(this);
    }
  
    actualizar(catalogo) {
      this.peliculas = catalogo.slice(0, 5);
      this.mostrar();
    }
  
    mostrar() {
      console.log("La portada de Netflix muestra las siguientes películas:");
      for (let i = 0; i < this.peliculas.length; i++) {
        console.log("- " + this.peliculas[i]);
      }
      console.log("");
    }
  }
  
  // Creamos una instancia de la clase "Netflix"
  const netflix = new Netflix();
  
  // Creamos una instancia de la clase "Portada"
  const portada = new Portada(netflix);
  
  // Agregamos algunas películas al catálogo
  netflix.agregarPelicula("Anabballe");
  netflix.agregarPelicula("John Wick");
  netflix.agregarPelicula("Your Name");
  
  // Eliminamos una película del catálogo 
  netflix.removerPelicula("John Wick");
  