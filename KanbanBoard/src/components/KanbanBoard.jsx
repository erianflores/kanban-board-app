import { useState } from "react";
import "../styles/KanbanBoard.css";
import data from "../assets/kanban.json";
import Column from "./Column";

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

  const [boards] = useState(initialBoards);

  return (
    <div id="overlay-lower">
      <div id="kanban-container">
        <Column title={boards.todo.title} items={boards.todo.items} />
        <Column
          title={boards.inProgress.title}
          items={boards.inProgress.items}
        />
        <Column title={boards.done.title} items={boards.done.items} />
      </div>
    </div>
  );
}
