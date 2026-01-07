import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDeleteNote }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}
