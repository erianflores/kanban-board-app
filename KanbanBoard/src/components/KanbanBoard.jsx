import { useState } from "react";
import "../styles/KanbanBoard.css";
import data from "../assets/kanban.json";
import Column from "./Column";
import EditTaskForm from "../pages/EditTaskForm";
import AddTaskForm from "../pages/AddTaskForm";

export default function KanbanBoard() {
  const initialBoards = {
    todo: {
      title: "To Do",
      items: data.filter((task) => task.status === "To Do"),
    },
    inProgress: {
      title: "In Progress",
      items: data.filter((task) => task.status === "In Progress"),
    },
    done: {
      title: "Done",
      items: data.filter((task) => task.status === "Done"),
    },
  };

  const [boards, setBoards] = useState(initialBoards);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDrop = (newStatus) => {
    if (!draggedTask) return;

    // Find the current board key that contains the dragged task
    const sourceBoardKey = Object.keys(boards).find((key) =>
      boards[key].items.some((item) => item.id === draggedTask.id)
    );

    // Find the target board key based on the new status
    const targetBoardKey = Object.keys(boards).find((key) =>
      boards[key].title === newStatus
    );

    if (sourceBoardKey && targetBoardKey) {
      setBoards(prevBoards => {
        // Remove from source
        const sourceItems = prevBoards[sourceBoardKey].items.filter(
          item => item.id !== draggedTask.id
        );

        // Add to target with updated status
        const updatedTask = { ...draggedTask, status: newStatus };
        const targetItems = [...prevBoards[targetBoardKey].items, updatedTask];

        return {
          ...prevBoards,
          [sourceBoardKey]: {
            ...prevBoards[sourceBoardKey],
            items: sourceItems
          },
          [targetBoardKey]: {
            ...prevBoards[targetBoardKey],
            items: targetItems
          }
        };
      });
    }

    setDraggedTask(null);
  };

  const handleDeleteClick = (id, status) => {
    setBoards((prevBoards) => {
      const updatedItems = prevBoards[status].items.filter(
        (item) => item.id !== id
      );
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
    setBoards((prevBoards) => {
      const boardKey = Object.keys(prevBoards).find((key) =>
        prevBoards[key].items.some((item) => item.id === updatedTask.id)
      );

      if (!boardKey) return prevBoards;

      return {
        ...prevBoards,
        [boardKey]: {
          ...prevBoards[boardKey],
          items: prevBoards[boardKey].items.map((item) =>
            item.id === updatedTask.id ? updatedTask : item
          ),
        },
      };
    });
  };

  const handleAddTask = (newTask) => {
    setBoards(prev => ({
      ...prev,
      todo: {
        ...prev.todo,
        items: [...prev.todo.items, newTask]
      }
    }));
  };

  return (
    <div id="overlay-lower">
      <div id="kanban-container">
        <Column
          title={boards.todo.title}
          items={boards.todo.items}
          onDelete={(id) => handleDeleteClick(id, "todo")}
          onEdit={handleEditClick}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <Column
          title={boards.inProgress.title}
          items={boards.inProgress.items}
          onDelete={(id) => handleDeleteClick(id, "inProgress")}
          onEdit={handleEditClick}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />
        <Column
          title={boards.done.title}
          items={boards.done.items}
          onDelete={(id) => handleDeleteClick(id, "done")}
          onEdit={handleEditClick}
          onDrop={handleDrop}
          onDragStart={handleDragStart}
        />

        <button onClick={() => setShowAddForm(true)}>
          Add New Task
        </button>

        {showAddForm && (
          <AddTaskForm
            onAddTask={handleAddTask}
            onClose={() => setShowAddForm(false)}
          />
        )}

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