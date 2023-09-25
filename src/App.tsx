import React,{useState} from 'react'
import AddNotes from './Components/AddNotes';
import Notes from './Components/Notes';
import { NotesData } from './Components/data';
import { NoteType } from './Components/note-type';
import _ from 'lodash';

function App() {
  const [notesData,setNotes]=useState(NotesData);
  const [editNoteId,setEditNoteId]=useState<String>('');
  const addNotes =(data:NoteType)=>{
setNotes([...notesData,data])
  }
  const updateHandeler =(data:NoteType)=>{
let editNote= [...notesData];
const updatedNotes = editNote.map((note) => {
  if (note.id === data.id) {
    
    return { ...note, text: data.text }; // Update the text of the note with the matching id
  }
  
  return note;
});
setNotes(updatedNotes)
  }
  const handelEdit =(id:String)=>{
    setEditNoteId(id)
  }
  const handelDelete =(id:String)=>{
    let deleteNote= [...notesData];
    const updatedNotes = deleteNote.filter((note) => note.id !== id);  
    setNotes(updatedNotes);
  }
  return (
    <div className="App">
      <AddNotes addNotes={addNotes} editNoteId={editNoteId} notesData={notesData} updateHandeler={updateHandeler}/>
      <h3>This is the Notes Components</h3>
      {notesData?.map(note=>( <Notes id={note.id}  text={note.text} handelEdit={handelEdit} handelDelete={handelDelete}/>))}
     
    </div>
  );
}

export default App;
