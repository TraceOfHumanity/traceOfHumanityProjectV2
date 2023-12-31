import React from "react";

import { Route, Routes } from "react-router-dom";

import { Header, MusicPlayer } from "./components";
import { AboutAuthor, Home, Library } from "./pages";

function App() {
  return (
    <div className="app">
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
      </Routes>
      {/* <MainMenu /> */}
      {/* <Earth /> */}
    </div>
  );
}

export default App;
