import {formatDate} from '../../Common/helperFunctions';
import styled from 'styled-components';


const NoteCardWrapper = styled.div`
  display: flex; 
  flex-flow: column;
  margin: 2rem;
  min-width: 16rem; 
  background: #e99920;
`
const DateWrapper = styled.span `
  font-size: .7rem;
  display: flex; 
  justify-content: space-between;

  button {
    background: none;
    border: none;

  }
`

const NoteText = styled.div`
  width: 6rem;
  height: 4rem;
  overflow-y: scroll;
  word-wrap: break-word;
  background-color: peachpuff;
`

function Note(props:any) {
  const note = props.note;
  return <NoteCardWrapper>
    <span onClick={() => props.editFunction(note)}>
    <DateWrapper>
      {formatDate(new Date(note.lastUpdated))} 
    <button
      onClick={props.deleteNote}
      >
        <span className="material-icons-outlined">
          check_circle
        </span>
      X
    </button>
    </DateWrapper>
    <NoteText>
      {note.id} - {note.text}
    </NoteText>
    </  span>
    </NoteCardWrapper>
}

export default Note;