export type NotesProps={
  id:String,
    text:string,
    handelEdit: (id: String) => void,
    handelDelete: (id: String) => void
  }
export type NoteType={
    id :String,
    text:string
  }