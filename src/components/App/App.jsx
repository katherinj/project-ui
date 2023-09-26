import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movies" element={<Landing />} />
            <Route path="/customers" element={<Landing />} />
            <Route path="/reports" element={<Landing />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
