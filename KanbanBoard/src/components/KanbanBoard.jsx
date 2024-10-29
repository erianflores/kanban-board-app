import { useState } from 'react';
import Column from './Column';
import AddTask from './AddTask';
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
    <div id='overlay-lower'>
      <div id="kanban-container">
        {Object.entries(boards).map(([boardId, board]) => (
          <Column
          key={boardId}
          title={board.title}
          items={board.items}
          boardId={boardId}
          />
        ))}
      </div>
    </div>
  );
}
