import React from 'react'



function Note({deleteNote, id}) {
  return (
    <div>
      <div>
        <textarea className='note'></textarea>
        <div onClick = {() => {deleteNote(id)}} className='del-note'>Delete</div>
      </div>
    </div>
  )
}

export default Note