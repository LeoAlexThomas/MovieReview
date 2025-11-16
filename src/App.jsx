import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import PageNotFound from "./Pages/PageNotFound";
import { MovieProvider } from "./Context/MovieContext";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 font-body">
      <MovieProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Dynamic page routing */}
            <Route path="/movieDetails/:id" element={<MovieDetails />} />
            {/* No match Routing */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
};

export default App;
