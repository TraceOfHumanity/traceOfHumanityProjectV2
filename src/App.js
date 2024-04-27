import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader } from "components/Loader";

import { Header } from "./components/Header";
import { MusicPlayer } from "./components/MusicPlayer";
import { Popups } from "./components/Popups";
import { AboutAuthor } from "./pages/AboutAuthor";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";

function App() {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <div className="app">
      {isLoading && <Loader />}
      <ToastContainer theme="dark" />
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />}>
          <Route path=":subtopic" element={<p>123</p>} />
        </Route>
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Popups />
    </div>
  );
}

export default App;
