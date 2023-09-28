function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">LANDING</header>
      <TopFiveMovies />
    </div>
  );
}

export default Landing;

export function TopFiveMovies() {
  return (
    <div>
      <h1>Top 5 Rented Movies of All Times</h1>
    </div>
  );
}
