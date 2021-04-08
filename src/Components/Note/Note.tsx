import {formatDate} from '../../Common/helperFunctions';
import styled from 'styled-components';

const borderRadius = '10px';

const NoteCardWrapper = styled.div`
  display: flex; 
  flex-flow: column;
  margin: 2rem;
  min-width: 16rem; 
  max-width: 16rem;
  height: 6rem;
  max-height: 6rem;
  background: #e99920;
  border-radius: ${borderRadius};
  box-shadow: 0.2rem 0.2rem 0 grey;
`
const DateWrapper = styled.span `
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;

  &::nth-child(2) {
    background-color: blue;
  }

  button {
    background: none;
    border: none;
    color: #686868;
    cursor: pointer;
    padding: 0;
    
    &.delete:hover { 
      color: red;
    }

    &.edit:hover {
      color: yellow;
    }
  }
`

const NoteText = styled.div`
  box-sizing: border-box;
  border-radius: 0 0 ${borderRadius} ${borderRadius};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  word-wrap: break-word;
  background-color: peachpuff;
  padding: 1rem;
`

function Note(props:any) {
  const note = props.note;

  function lastEditedElement(note: any) {
    if (JSON.stringify(note.lastUpdated) !== JSON.stringify(note.created)) {
      return (
        <span>Updated:{formatDate(note.lastUpdated)}</span>
      )
    }
  }

  return (
  <NoteCardWrapper>
    <DateWrapper>
      {formatDate(new Date(note.lastUpdated))} 
      {lastEditedElement(note)}
      <span>
      <button 
        onClick={() => props.editFunction(note)}
        className="material-icons edit">
        edit
      </button>
      <button 
        onClick={props.deleteNote} 
        className="material-icons delete"
      >
        cancel
      </button>
        </span>
    </DateWrapper>
    <NoteText>
      {note.id} - {note.text}
    </NoteText>
    </NoteCardWrapper>
  )
}

export default Note;