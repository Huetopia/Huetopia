// src/ChatInput.js
import React, { useState } from "react";
import { GeneratePalette } from "./components/GeneratePalette";
import { Routes, Route } from "react-router-dom";
import { ColorPaletteDetails } from "./components/ColorPaletteDetails";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AllColors } from "./pages/AllColors";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

// delete once Tailwind is implemented
//import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GeneratePalette />} />
        <Route path="/palettes/:id" element={<ColorPaletteDetails />} />
        <Route path="/palettes" element={<AllColors />} />
        <Route path="/palettes/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
