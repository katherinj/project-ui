import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Movies from "../Movies/Movies";
import Customers from "../Customers/Customers";
import Reports from "../Reports/Reports";
import NotFound from "../NotFound/NotFound";
import { MovieContextProvider } from "../../contexts/movie";

export default function AppContainer() {
  return (
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  );
}

export function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}
