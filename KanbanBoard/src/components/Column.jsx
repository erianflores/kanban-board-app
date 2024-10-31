import Tasks from "./Task";

function Column({ title, items }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div className="kanban-items">
        <Tasks items={items} />{" "}
      </div>
    </div>
  );
}

export default Column;
