import Tasks from "./Task";

function Column({ title, items, onDelete, onEdit }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div className="kanban-items">
        <Tasks items={items} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default Column;
