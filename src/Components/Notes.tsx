import React from 'react'
import {NotesProps} from './note-type'

const Note = (props:NotesProps) => {

  return (
    <>
    <div>Notes {props.text}
    <button onClick={()=>props.handelEdit(props.id)}>Edit</button>
    <button onClick={()=>props.handelDelete(props.id)}>Delete</button>
    </div>
   
    </>
  )
}

export default Note