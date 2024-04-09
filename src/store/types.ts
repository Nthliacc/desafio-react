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
  filter: Movie[];
  isFiltered: boolean;
  loading: boolean;
}

export interface MovieContextProps {
  movies: Movie[];
  moviesCart: MovieCartItem[];
  loading: boolean;
  filterMovies: (filter: string) => void;
  addToCart: (movie: Movie) => void;
  removeFromCart: (movie: Movie) => void;
  removeAllFromCart: () => void;
  updatedCartChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: Movie
  ) => void;
  updatedCartClick: (opration: string, movie: Movie) => void;
}