📝 React Notes Management App

## Project Overview

This is a simple Notes Management application built using React JS.
The application allows users to add, view, and delete notes, while demonstrating clean component architecture, proper state management, and thoughtful handling of UI states such as loading, empty, and error scenarios.

## Tech Stack

    1. React JS
    2. Vite
    3. JavaScript
    4. CSS (plain, minimal styling)

## How to Run the Application

Prerequisites:
Node.js v18 or later
npm

Steps:

1. Clone the repository:
   git clone <your-github-repo-url>

2. Navigate into the project folder:
   cd notes-management-app

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the browser and visit:
   http://localhost:5173

## Component Breakdown

1. App.jsx

   -> Root component of the application.
   -> Holds all application state (notes, loading).
   -> Handles adding and deleting notes.
   -> Controls conditional rendering of Loader, EmptyState, and NoteList.

2. NoteForm.jsx

   -> Handles note creation.
   -> Manages form inputs and validation.
   -> Displays inline error message if the title is empty.
   -> Disables submit button when validation fails.

3. NoteList.jsx

   -> Renders the list of notes.
   -> Passes each note to NoteItem.

4. NoteItem.jsx

   -> Displays individual note details.
   -> Provides a delete button to remove the note.

5. Loader.jsx

   -> Displays a loading indicator during initial load.

6. EmptyState.jsx

   -> Displays a friendly message when no notes are available.

## State Management Explanation

    1. All application state is stored in App.jsx.
    2. State is lifted to the lowest common ancestor as required.
    3. Child components receive data and handlers via props.
    4. useState is used for state management.
    5. useEffect is used only to simulate a loading delay using setTimeout.

## Assumptions & Limitations

    1. Notes are stored only in memory (no persistence).
    2. No backend or API integration is included.
    3. Styling is intentionally minimal to focus on functionality and clarity.
    4. The application is designed for demonstration and assessment purposes.
