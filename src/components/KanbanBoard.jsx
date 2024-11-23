import { useState, useEffect } from "react";
import "../styles/KanbanBoard.css";
import Column from "./Column";
import EditTaskForm from "../pages/EditTaskForm";
import AddTaskForm from "../pages/AddTaskForm";

export default function KanbanBoard({ tasks, setTasks }) {
  const initialBoards = {
    todo: {
      title: "To Do",
      items: tasks.filter((task) => task.status === "To Do"),
    },
    inProgress: {
      title: "In Progress",
      items: tasks.filter((task) => task.status === "In Progress"),
    },
    done: {
      title: "Done",
      items: tasks.filter((task) => task.status === "Done"),
    },
  };

  const [boards, setBoards] = useState(initialBoards);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);
  const [sourceColumn, setSourceColumn] = useState(null);

  useEffect(() => {
    setBoards({
      todo: {
        title: "To Do",
        items: tasks.filter((task) => task.status === "To Do"),
      },
      inProgress: {
        title: "In Progress",
        items: tasks.filter((task) => task.status === "In Progress"),
      },
      done: {
        title: "Done",
        items: tasks.filter((task) => task.status === "Done"),
      },
    });
  }, [tasks]);

  const handleDragStart = (e, task, status) => {
    setDraggedTask(task);
    setSourceColumn(status);
  };

  const handleDrop = (newStatus) => {
    if (!draggedTask || !sourceColumn || sourceColumn === newStatus) {
      return;
    }

    const sourceBoardKey = Object.keys(boards).find((key) =>
      boards[key].title === sourceColumn
    );

    const targetBoardKey = Object.keys(boards).find((key) =>
      boards[key].title === newStatus
    );

    if (sourceBoardKey && targetBoardKey) {
      const updatedTask = { ...draggedTask, status: newStatus };
      setTasks(prevTasks => prevTasks.map(task => 
        task.id === draggedTask.id ? updatedTask : task
      ));

      setBoards(prevBoards => {
        const sourceItems = prevBoards[sourceBoardKey].items.filter(
          item => item.id !== draggedTask.id
        );

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
    setSourceColumn(null);
  };

  const handleDeleteClick = (id, status) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
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
    setTasks(prevTasks => prevTasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    
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
    const taskWithId = {
      ...newTask,
      id: Date.now().toString()
    };
    setTasks(prev => [...prev, taskWithId]);
    setBoards(prev => ({
      ...prev,
      todo: {
        ...prev.todo,
        items: [...prev.todo.items, taskWithId]
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
          onDragStart={(e, task) => handleDragStart(e, task, boards.todo.title)}
        />
        <Column
          title={boards.inProgress.title}
          items={boards.inProgress.items}
          onDelete={(id) => handleDeleteClick(id, "inProgress")}
          onEdit={handleEditClick}
          onDrop={handleDrop}
          onDragStart={(e, task) => handleDragStart(e, task, boards.inProgress.title)}
        />
        <Column
          title={boards.done.title}
          items={boards.done.items}
          onDelete={(id) => handleDeleteClick(id, "done")}
          onEdit={handleEditClick}
          onDrop={handleDrop}
          onDragStart={(e, task) => handleDragStart(e, task, boards.done.title)}
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