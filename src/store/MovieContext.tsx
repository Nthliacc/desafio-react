import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Movie, MovieContextProps, MovieContextState } from "./types";

const initialState: MovieContextProps = {
  movies: [],
  moviesCart: [],
  loading: false,
  filterMovies: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updatedCartChange: () => {},
  updatedCartClick: () => {},
  removeAllFromCart: () => {},
};

export const MovieContext = createContext<MovieContextProps>(initialState);

export function MovieContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<MovieContextState>({
    movies: [],
    moviesCart: [],
    filter: [],
    isFiltered: false,
    loading: false,
  });

  const addToCart = (movie: Movie) => {
    const existingCartItemIndex = state.moviesCart.findIndex(
      (item) => item.movie.id === movie.id
    );

    if (existingCartItemIndex === -1) {
      setState({
        ...state,
        moviesCart: [...state.moviesCart, { movie, quantity: 1 }],
      });
    } else {
      const newMoviesCart = [...state.moviesCart];
      newMoviesCart[existingCartItemIndex].quantity += 1;
      setState({ ...state, moviesCart: newMoviesCart });
    }
  };

  const removeFromCart = (movie: Movie) => {
    setState((prevState) => ({
      ...prevState,
      moviesCart: prevState.moviesCart.filter(
        (item) => item.movie.id !== movie.id
      ),
    }));
  };

  const removeAllFromCart = () => {
    setState((prevState) => ({
      ...prevState,
      moviesCart: [],
    }));
  };

  const updatedCartChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: Movie
  ) => {
    const updatedQuantity = Number(event.target.value);

    if (!isNaN(updatedQuantity) && updatedQuantity > 0) {
      setState((prevState) => ({
        ...prevState,
        moviesCart: prevState.moviesCart.map((cartItem) =>
          cartItem.movie.id === movie.id
            ? { ...cartItem, quantity: updatedQuantity }
            : cartItem
        ),
      }));
    }
  };

  const updatedCartClick = (operation: string, movie: Movie) => {
    const updatedCart = state.moviesCart.map((cartItem) => {
      if (cartItem.movie.id === movie.id) {
        return {
          ...cartItem,
          quantity:
            operation === "add"
              ? cartItem.quantity + 1
              : Math.max(1, cartItem.quantity - 1),
        };
      }
      return cartItem;
    });

    setState({ ...state, moviesCart: updatedCart });
  };

  const filterMovies = (filter: string) => {
    const filteredMovies = state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    setState({
      ...state,
      filter: filteredMovies,
      isFiltered: true,
      loading: false,
    });
  };

  useEffect(() => {
    const getMovies = async () => {
      setState({ ...state, loading: true });
      try {
        const response = await axios.get<Movie[]>(
          "http://localhost:3000/products"
        );
        setTimeout(() => {
          setState({ ...state, movies: response.data, loading: false });
          if (window.location.search) {
            const params = new URLSearchParams(window.location.search).get(
              "search-query"
            );
            if (params) {
              filterMovies(params);
            }
          }
        }, 2000);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setState({ ...state, loading: false });
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    const cartItems = localStorage.getItem("moviesCart");
    if (cartItems) {
      setState((prevState) => ({
        ...prevState,
        moviesCart: JSON.parse(cartItems),
        loading: false,
      }));
    }
  }, []);

  // const paramsSearch = window.location.search;
  // useEffect(() => {
  //   if (paramsSearch) {
  //   const params = new URLSearchParams(paramsSearch).get(
  //       "search-query"
  //     );
  //     console.log(params)
  //     if (params) {
  //       filterMovies(params);
  //     } else {
  //       setState({ ...state, isFiltered: false });
  //     }
  //   }
  // }, [paramsSearch]);

  // const location = useLocation();

  // useEffect(() => {
  //   // Extrai o parâmetro da query da URL
  //   const searchQuery = new URLSearchParams(location.search).get("search-query");

  //   // Se houver um parâmetro de consulta na URL, filtra os filmes
  //   if (searchQuery) {
  //     filterMovies(searchQuery);
  //   }
  // }, [location.search]);

  useEffect(() => {
    localStorage.setItem("moviesCart", JSON.stringify(state.moviesCart));
  }, [state.moviesCart]);

  return (
    <MovieContext.Provider
      value={{
        movies: state.filter.length > 0 ? state.filter : state.movies,
        moviesCart: state.moviesCart,
        loading: state.loading,
        filterMovies,
        addToCart,
        removeFromCart,
        updatedCartChange,
        updatedCartClick,
        removeAllFromCart,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
