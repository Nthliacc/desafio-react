import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Movie,
  MovieCartItem,
  MovieContextProps,
  MovieContextState,
} from "./types";

const initialState: MovieContextProps = {
  movies: [],
  setMovies: () => {},
  moviesCart: [],
  setMoviesCart: () => {},
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
  });

  const addToCart = (movie: Movie) => {
    const movieIndex = state.moviesCart.findIndex(
      (item) => item.movie.id === movie.id
    );

    if (movieIndex === -1) {
      setState({
        ...state,
        moviesCart: [...state.moviesCart, { movie, quantity: 1 }],
      });
    } else {
      const newMoviesCart = [...state.moviesCart];
      newMoviesCart[movieIndex].quantity += 1;
      setState({ ...state, moviesCart: newMoviesCart });
    }
  };

  const removeFromCart = (movie: Movie) => {
    setState((prevCart) => ({
      ...prevCart,
      moviesCart: prevCart.moviesCart.filter(
        (item) => item.movie.id !== movie.id
      ),
    }));
  };

  const removeAllFromCart = () => {
    setState((prevCart) => ({
      ...prevCart,
      moviesCart: [],
    }));
  };

  const updatedCartChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    movie: Movie
  ) => {
    const updatedQuantity = Number(event.target.value);
    
    if (!isNaN(updatedQuantity) && updatedQuantity > 0 ) {
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
            operation === "add" ? cartItem.quantity + 1 : cartItem.quantity == 1 ? 1 : cartItem.quantity - 1,
        };
      }
      return cartItem;
    });

    setState({ ...state, moviesCart: updatedCart });
  };

  useEffect(() => {
    axios.get<Movie[]>("http://localhost:3000/products").then((response) => {
      setState({ ...state, movies: response.data });
    });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        setMovies: (movies: Movie[]) => setState({ ...state, movies }),
        moviesCart: state.moviesCart,
        setMoviesCart: (moviesCart: MovieCartItem[]) =>
          setState({ ...state, moviesCart }),
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
