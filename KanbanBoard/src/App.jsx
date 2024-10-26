import { useState } from 'react'
import './App.css'
import Column from './components/Column';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {

  const [boards, setBoards] = useState({
    todo: {
      title: "To Do",
      items: []
    },
    inProgress: {
      title: "To Do",
      items: []
    },
    Completed: {
      title: "To Do",
      items: []
    }
  })


  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  )
}