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
  

  function editNote(note: INote) {
    setMode('edit');
    setInputValue(note.text);
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (inputValue.trim().length) {
      const newItem: INote = {text: inputValue, lastUpdated: new Date(), id: applyId(cart)}      
      dispatch({type: 'add', item: newItem});
      setInputValue('');  
    }
  }

  useEffect(() => {
  })

  const textChange = (e: SyntheticEvent<HTMLTextAreaElement>): void => {
    setInputValue(e.currentTarget.value);
  }

  function deleteFunction(note: any) {
    dispatch({type: 'delete', item: note})
  }

  function cancelButton() {
    function quitEdit() {
      setInputValue('');
      setMode('add');
    }
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
    <button onClick={() => dispatch({type: 'empty'})}>Emtpy cart</button>
          
              <h2>Notes</h2>
            <ul>
              {cart.map((note: INote, idx: number)=> {
                return (
                    <Note 
                    note={note} 
                    deleteFunction={() => deleteFunction(note)}
                    editFunction={editNote}
                    key={note.id}
                    >
                    </Note>
                )
              })}
            </ul>
    </NotesWrapper>
  )
  
}