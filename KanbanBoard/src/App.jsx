import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import KanbanBoard from './components/KanbanBoard';

export default function App() {


  return (
    <>
      <Navbar />
      <Sidebar />
      <KanbanBoard />
      <Footer />
    </>
  )
}