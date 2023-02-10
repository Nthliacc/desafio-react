export interface Movie {
  id: number;
  price: number;
  image: string;
  title: string;
}

export interface MovieCartItem {
  movie: Movie;
  quantity: number;
}

export interface MovieContextState {
  movies: Movie[];
  moviesCart: MovieCartItem[];
}

export interface MovieContextProps {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<{movie: Movie[]}>>;
  moviesCart: MovieCartItem[];
  setMoviesCart: React.Dispatch<React.SetStateAction<MovieCartItem[]>>;
  addToCart: (movie: Movie) => void;
  removeFromCart: (movie: Movie) => void;
  removeAllFromCart: () => void;
  updatedCartChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: Movie
  ) => void;
  updatedCartClick: (opration: string, movie: Movie) => void;
}