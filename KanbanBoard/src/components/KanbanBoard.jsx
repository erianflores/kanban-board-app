import { useState } from 'react';
import '../styles/KanbanBoard.css';
import data from "../assets/kanban.json";
import Column from './Column';
import EditTaskForm from '../pages/EditTaskForm';

export default function KanbanBoard() {
  const initialBoards = {
    todo: {
      title: "To Do",
      items: data.filter(task => task.status === "To Do"),
    },
    inProgress: {
      title: "In Progress",
      items: data.filter(task => task.status === "In Progress"),
    },
    done: {
      title: "Done",
      items: data.filter(task => task.status === "Done"),
    },
  };

  const [boards, setBoards] = useState(initialBoards);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDeleteClick = (id, status) => {
    setBoards(prevBoards => {
      const updatedItems = prevBoards[status].items.filter(item => item.id !== id);
      return {
        ...prevBoards,
        [status]: {
          ...prevBoards[status],
          items: updatedItems,
        },
      };
    });
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setShowEditForm(true);
  };

  const handleUpdateTask = (updatedTask) => {
    setBoards(prevBoards => {
      const boardKey = Object.keys(prevBoards).find(key => 
        prevBoards[key].items.some(item => item.id === updatedTask.id)
      );

      if (!boardKey) return prevBoards;

      return {
        ...prevBoards,
        [boardKey]: {
          ...prevBoards[boardKey],
          items: prevBoards[boardKey].items.map(item =>
            item.id === updatedTask.id ? updatedTask : item
          ),
        },
      };
    });
  };

  return (
    <div id='overlay-lower'>
      <div id="kanban-container">
        <Column title={boards.todo.title} items={boards.todo.items} onDelete={(id) => handleDeleteClick(id, 'todo')} onEdit={handleEditClick} />
        <Column title={boards.inProgress.title} items={boards.inProgress.items} onDelete={(id) => handleDeleteClick(id, 'inProgress')} onEdit={handleEditClick} />
        <Column title={boards.done.title} items={boards.done.items} onDelete={(id) => handleDeleteClick(id, 'done')} onEdit={handleEditClick} />

        {showEditForm && selectedTask && (
          <EditTaskForm
            task={selectedTask}
            onUpdateTask={(updatedTask) => {
              handleUpdateTask(updatedTask);
              setShowEditForm(false);
              setSelectedTask(null);
            }}
            onClose={() => {
              setShowEditForm(false);
              setSelectedTask(null);
            }}
          />
        )}
      </div>
    </div>
  );
}