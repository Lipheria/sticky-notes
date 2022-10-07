import React from 'react'
import {useState} from "react"
import Note from "../components/Note"
import uuid from 'react-uuid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const NoteAdder = () => {
    const [notes, setNewNotes] = useState([])
   
    const addNewNote = () => {
      let id = uuid();
      let newNote = {
        id: id
      }
      let addedNote = ([newNote, ...notes]) 
      setNewNotes(addedNote)
      console.log(addedNote)
    }

    const deleteNote = (id) => {
      let updatedNotes = [...notes].filter((note) => note.id !== id)
      console.log(updatedNotes)
      setNewNotes(updatedNotes) 
      
    }


    return (
      <div id="app">
          <button onClick = {addNewNote} className="add-note" type="button">+</button>
          {notes.map((note) => {
            return(
              <Note note={note} key={note.id} id = {note.id} deleteNote = {deleteNote} />
            ) 
          }
          )}
      </div>
    )
}

export default NoteAdder