import MovieCard from "../MovieCard/MovieCard";
import { useMovieContext } from "../../contexts/movie";
import { useState, useEffect } from "react";

export default function Movies() {
  const { setCurrentMovie, movies, isLoading } = useMovieContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesToShow, setMoviesToShow] = useState([]);

  useEffect(() => {
    if (movies) {
      setMoviesToShow(movies);
    }
  }, [movies]);

  // handler function to set search term as a user types
  const handleOnSearchChange = (change) => {
    setSearchTerm(change.target.value);
  };

  // handler function to clear search term if close button is clicked
  const handleOnClickSearchBtn = () => {
    setSearchTerm("");
  };

  const handleOnMovieClick = (movieObject) => {
    setCurrentMovie(movieObject.id);
  };

  useEffect(() => {
    // update moviesToShow array depending on searchTerm
    if (movies) {
      setMoviesToShow(
        moviesToShow?.filter((movie) =>
          movie?.title?.toLowerCase().includes(searchTerm?.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <div className="movies-overview">
      {/* movies overview header  */}
      <div className="header">
        <h1> Your Movies</h1>
      </div>

      {/* search for movies  */}
      <div className="movie-search">
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="search for a movie"
          value={searchTerm}
          onChange={handleOnSearchChange}
        />
        <button className="search-btn" onClick={handleOnClickSearchBtn}>
          <i className="material-icons">
            {/* conditionally render search or close icon depending on search terms */}
            {searchTerm == "" ? "search" : "close"}
          </i>
        </button>
      </div>

      {/* container that will hold all MovieCard components*/}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="movie-card-container">
          {moviesToShow.length > 0 ? (
            <>
              {moviesToShow
                ?.filter((p) =>
                  p?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
                )
                ?.map((movie) => (
                  <MovieCard
                    movie={movie}
                    handleOnClick={handleOnMovieClick}
                    // key={movie.id}
                  />
                ))}
            </>
          ) : (
            <div className="nothing-available-label">No movies available </div>
          )}
        </div>
      )}
    </div>
  );
}
