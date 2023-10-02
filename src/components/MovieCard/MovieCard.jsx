import { useState } from "react";
import "./MovieCard.css";

export default function MovieCard({ movie, index, list }) {
  const [showDetails, setShowDetails] = useState(false);
  console.log("MOvie: ", movie);
  console.log("Description: ", movie.description);
  // handler function to clear search term if close button is clicked
  const handleOnMovieDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="movie-card" onClick={handleOnMovieDetailsClick}>
      <div className="movie-heading">
        <h3> {list ? index + ". " + movie.title : movie.title}</h3>
      </div>

      {showDetails ? (
        <div className="details-container">
          <h4>Details:</h4>
          <p>Description: {movie.description}</p>
          <p>Release year: {movie.release_year}</p>
          <p>Rating: {movie.rating} </p>
          <p>Length: {movie.length} minutes</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
