import { useState } from 'react'
import Column from './components/Column';
import AddTask from './components/AddTask';
import '../styles/KanbanBoard.css';

export default function KanbanBoard() {

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
    <div>KanbanBoard</div>
  )
}
