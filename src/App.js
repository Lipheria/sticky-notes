import './App.css';
import NoteAdder from "./components/NoteAdder"
import Note from "./components/Note"
import uuid from 'react-uuid';



function App() {
  
  return (
    <div>
      <h1>WHAT DO YOU HAVE PLANNED TODAY</h1>
      <NoteAdder/>
    </div>
    
  );
}

export default App;
