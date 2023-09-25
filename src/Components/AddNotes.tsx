import React,{useState,ChangeEvent,useEffect} from 'react';
import { NoteType } from './note-type';
import _ from 'lodash';

type addNotesProps ={
    addNotes: (data: NoteType) => void,
    updateHandeler: (data: NoteType) => void,
    editNoteId: String,
    notesData: NoteType[]
}


const AddNotes = (props:addNotesProps) => {
    const [text,setText]=useState('');
    const [editable,setEditable]=useState(false);

    useEffect(() => {
        let editNote= [...props.notesData];
        const updatedNotes = editNote.filter((note) => note.id == props.editNoteId);  
        const firstObject = _.first(updatedNotes);
        setText(firstObject?.text|| ''); 
        if(props.editNoteId){
            setEditable(true)
        }               
      },[props.editNoteId]);
    const onHandelChage=(e: ChangeEvent<HTMLInputElement>)=> {
        setText(e.target.value)
    }
    const handelAdd=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault();
       props.addNotes({
        text,
        id:Math.random().toString(3)
       })
       setText('');
    }
    const handelSave=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        e.preventDefault();
      props.updateHandeler({
        text,
        id:props.editNoteId
       })
       setEditable(false);
       setText('');
    }

  return (
    <div>
        <form>
            <input type='text'value={text} onChange={onHandelChage}/>
            {editable ? 
            <button onClick={handelSave}>Save</button>
            :<button onClick={handelAdd}>Add</button> 
        }
        </form>
    </div>
  )
}

export default AddNotes