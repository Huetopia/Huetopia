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

// src/components
import ColorPalettesList from "./components/ColorPalettesList";

// delete once Tailwind is implemented
//import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GeneratePalette />} />
        <Route path="/palettes/:id" element={<ColorPaletteDetails />} />
        <Route path="/palettes" element={<AllColors url="palettes"/>} />
        <Route path="/favourites" element={<Favourites url="favourites"/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
