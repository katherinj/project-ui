import { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const MovieContext = createContext(null);

// context to keep track of movies and the current movie selected
export const MovieContextProvider = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [topFiveMovies, setTopFiveMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchAllMovies = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await apiClient.fetchAllMovies();
    console.log("DATA:", data);
    if (data) {
      setMovies(data.movies);
    }
    if (error) {
      setError(false);
    }
    setIsLoading(false);
  };

  const fetchTopFiveMovies = async () => {
    setIsLoading(true);
    setError(null);
    const { data, error } = await apiClient.fetchTopFiveMovies();
    if (data) {
      setTopFiveMovies(data.movies);
    }
    if (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  // useEffect to fetch movies on initial load
  useEffect(() => {
    fetchTopFiveMovies();
    fetchAllMovies();
  }, []);

  const movieValue = {
    topFiveMovies,
    setTopFiveMovies,
    currentMovie,
    setCurrentMovie,
    isLoading,
    movies,
    fetchAllMovies,
  };

  return (
    <MovieContext.Provider value={movieValue}>
      <>{children}</>
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
