import Tasks from "./Task";

export default function Column({ title, items, onDelete, onEdit, onDrop, onDragStart }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    onDrop(title);
  };

  return (
    <div 
      className="kanban-column"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>
      <div className="kanban-items">
        <Tasks 
          items={items} 
          onDelete={onDelete} 
          onEdit={onEdit}
          onDragStart={onDragStart}
        />
      </div>
    </div>
  );
}