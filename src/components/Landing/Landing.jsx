import { useMovieContext } from "../../contexts/movie";
import MovieCard from "../MovieCard/MovieCard";

export default function Landing() {
  const { topFiveMovies } = useMovieContext();
  console.log(topFiveMovies);
  return (
    <div className="landing">
      <TopFiveMovies topFiveMovies={topFiveMovies} />
    </div>
  );
}

export function TopFiveMovies({ topFiveMovies }) {
  return (
    <div>
      <h1>Top 5 Rented Movies of All Times</h1>
      {topFiveMovies.map((movie, index) => (
        <MovieCard
          movie={movie}
          key={movie.film_id}
          index={index + 1}
          list={true}
        />
      ))}
    </div>
  );
}
