import React, {SyntheticEvent, useState, useEffect } from 'react';
import { useCart } from '../../CartContext';
import Note from '../Note/Note';
import styled from 'styled-components';
import { INote } from '../../Common/Interfaces'

const NotesWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
const ConfigureButton = styled.button`
  text-transform: capitalize;
`
const NoteInput = styled.textarea``

const NotesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
`

function applyId(notes: INote[]) {
  const length = notes.length;
  if (length) {
    const lastId: number = notes[length - 1]?.id;
    return lastId + 1 || 0;
  }
  return 0;
}

export default function Notes(props:any) {
  const {cart, dispatch} = useCart();
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState('add');
  const [noteToEdit, setNoteToEdit] = useState({
    text: '',
    lastUpdated: new Date().toString(),
    created: new Date().toString(),
    id: -1
  })
  

  function editNote(note: INote) {
    setMode('edit');
    setNoteToEdit(note);
    setInputValue(note.text);
  }

  function quitEdit() {
    setInputValue('');
    setMode('add');
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (mode === 'add' && inputValue.trim().length) {
        const newItem: INote = {
          text: inputValue,
          lastUpdated: new Date().toString(),
          created: new Date().toString(),
          id: applyId(cart)
        }      
        dispatch({type: 'add', item: newItem});
        setInputValue('');  
    } else if (mode === 'edit') {
        const updatedNote: INote = {
          text: inputValue,
          lastUpdated: new Date().toString(),
          created: noteToEdit.created,
          id: noteToEdit.id
        }
        quitEdit()
        dispatch({type: 'edit', item: updatedNote});
    }
  }

  useEffect(() => {
  })

  const textChange = (e: SyntheticEvent<HTMLTextAreaElement>): void => {
    setInputValue(e.currentTarget.value);
  }

  function deleteNote(note: any) {
    quitEdit();
    dispatch({type: 'delete', item: note})
  }

  function emptyCart() {
    quitEdit();
    dispatch({type:'empty'})
  }
  
  function cancelButton() {
    if (mode === 'edit') {
      return (
        <ConfigureButton onClick={() => quitEdit()}>
          Cancel
        </ConfigureButton>
      )
    }
  }

  return (
    <NotesWrapper>
    <form onSubmit={handleSubmit}>
      <label>
        Input note:
      </label>
        <br></br>
      <NoteInput 
        value={inputValue}
        onChange={textChange}
      >
      </NoteInput>
        <br></br>
      <ConfigureButton type="submit">
        {mode}
      </ConfigureButton>
      {cancelButton()}
    </form>
      <br></br>
    <button onClick={() => emptyCart()}>Emtpy cart</button>
          
              <h2>Notes</h2>
            <NotesList>
              {cart.map((note: INote, idx: number)=> {
                return (
                    <Note 
                    note={note} 
                    deleteNote={() => deleteNote(note)}
                    editFunction={editNote}
                    key={note.id}
                    >
                    </Note>
                )
              })}
            </NotesList>
    </NotesWrapper>
  )
  
}