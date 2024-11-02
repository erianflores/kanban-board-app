import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import KanbanBoard from "./components/KanbanBoard";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Details from "./components/Details";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Sidebar />
      <KanbanBoard />
      <Footer />
    </>
  );
}
