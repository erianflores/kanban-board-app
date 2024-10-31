import Tasks from "./Task";

function Column({ title, items, onDelete }) {

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div className="kanban-items">
        <Tasks items={items} onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default Column;
