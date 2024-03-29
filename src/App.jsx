// src/ChatInput.js
import React, { useState } from "react";
import { GeneratePalette } from "./components/GeneratePalette";
import { Routes, Route } from "react-router-dom";
import { ColorPaletteDetails } from "./components/ColorPaletteDetails";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllColors } from "./pages/AllColors";
import { Favourites } from "./pages/Favourites";
import { About } from "./pages/About";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorPage } from "./pages/ErrorPage";

// src/components
import ColorPalettesList from "./components/ColorPalettesList";
import { RandomPalette } from "./pages/RandomPalette";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<GeneratePalette />} />
        <Route
          path="/palettes/:paletteId"
          element={<ColorPaletteDetails url="palettes" />}
        />
        <Route path="/palettes" element={<AllColors url="palettes" />} />
        <Route path="/favourites" element={<Favourites url="favourites" />} />
        <Route
          path="/favourites/:paletteId"
          element={<ColorPaletteDetails url="favourites" />}
        />
        <Route path="/random" element={<RandomPalette />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
