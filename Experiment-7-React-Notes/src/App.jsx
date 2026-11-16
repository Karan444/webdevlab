
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote(e) {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both title and description");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      description: description
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setDescription("");
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">My Notes App</h1>

      <form onSubmit={addNote} className="card p-4 mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Enter note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />

        <button type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>

      <div className="row">
        {notes.map((note) => (
          <div className="col-md-4 mb-3" key={note.id}>
            <div className="card p-3 h-100">
              <h5>{note.title}</h5>
              <p>{note.description}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteNote(note.id)}
              >
                Delete Note
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
