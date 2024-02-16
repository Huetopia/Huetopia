// src/ChatInput.js
import React, { useState } from "react";
import { GeneratePalette } from "./components/GeneratePalette";
import { Routes, Route } from "react-router-dom";
import { ColorPaletteDetails } from "./components/ColorPaletteDetails";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

// delete once Tailwind is implemented
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<GeneratePalette />} />
        <Route path="/palettes/:id" element={<ColorPaletteDetails />} />
      </Routes>
  );
}

export default App;
