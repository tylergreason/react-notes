import React, {SyntheticEvent, useState, useEffect } from 'react';
import { useCart } from '../../CartContext';
import Note from '../Note/Note';
import styled from 'styled-components';

interface IItemInterface {
  text: string,
  lastUpdated: Date 
}

const NotesWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const NoteInput = styled.textarea`
  /* min-width: 75vw;
  height: 2rem; */
`

export default function Notes(props:any) {
  const {cart, dispatch} = useCart();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (inputValue.trim().length) {
      const newItem: IItemInterface = {text: inputValue, lastUpdated: new Date()}      
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
      <button type="submit">
        Submit
      </button>
    </form>
      <br></br>
    
    <button onClick={() => dispatch({type: 'empty'})}>Emtpy cart</button>
          
              <h2>Notes</h2>
            <ul>
              {cart.map((item: IItemInterface, idx: number)=> {
                return (
                    <Note 
                    note={item} 
                    deleteFunction={() => deleteFunction(item)}
                    key={idx}
                    >
                    </Note>
                )
              })}
            </ul>
    </NotesWrapper>
  )
  
}