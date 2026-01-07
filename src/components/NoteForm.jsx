import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title cannot be empty.");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      description,
    };

    onAddNote(newNote);

    // Clear form after success
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div>
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" disabled={title.trim() === ""}>
        Submit
      </button>
    </form>
  );
}
