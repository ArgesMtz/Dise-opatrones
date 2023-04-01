//patrón Adapter se utiliza para permitir que dos clases incompatibles trabajen juntas. En este caso, 
//utilize el patrón Adapter para permitir que la aplicación de tipo Netflix trabaje con objetos de la clase Movie, 
//mientras que los datos de las películas se proporcionan en objetos de la clase MovieData. El adaptador, que es la clase MovieDataAdapter, 
//se encarga de convertir los objetos de MovieData en objetos de Movie, de modo que puedan ser utilizados por la aplicación
class Movie {
    constructor(title, duration) {
      this.title = title;
      this.duration = duration;
    }
  
    play() {
      console.log(`Playing ${this.title}`);
    }
  
    pause() {
      console.log(`Pausing ${this.title}`);
    }
  }
  
  class MovieData {
    constructor(name, runtime) {
      this.name = name;
      this.runtime = runtime;
    }
  }
  
  // Adaptador para convertir MovieData en Movie
  class MovieDataAdapter {
    static adapt(movieData) {
      const title = movieData.name;
      const duration = movieData.runtime;
      return new Movie(title, duration);
    }
  }
  
  const movieData = new MovieData('Your Name', 130);
  const movie = MovieDataAdapter.adapt(movieData);
  movie.play();
  