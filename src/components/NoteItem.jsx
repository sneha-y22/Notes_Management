export default function NoteItem({ note, onDeleteNote }) {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      {note.description && <p>{note.description}</p>}

      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  );
}
