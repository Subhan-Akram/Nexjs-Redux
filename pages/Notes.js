import React from 'react'
import { app, database } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
function Notes() {
  const dbInstance = collection(database, 'notes');
  const noteTitle={
    name:"subhan akram",
    description:"Hi this is my first note",
    id:"2"
  }
  const saveNote = () => {
    console.log("working ")
    addDoc(dbInstance, {
        noteTitle: noteTitle
    })
}
  return (
   <div>
       <div>Notes</div>

<button onClick={saveNote}>Add notes in firestore</button>
   </div>
  )
}

export default Notes