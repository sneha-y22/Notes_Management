import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Loader simulation (mandatory)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <NoteForm onAddNote={addNote} />

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      )}
    </div>
  );
}
