import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div id="app-container">
      <Navbar />
      <div id="main-content">
        <Sidebar />
        <div id="content-area">
          <Routes>
            <Route path="/" element={<KanbanBoard />} />
            <Route path="/about-page" element={<AboutPage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
