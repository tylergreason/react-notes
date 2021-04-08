import {formatDate} from '../../Common/helperFunctions';

function Note(props:any) {
  const note = props.note;
  return <div>
    <button
      onClick={props.deleteFunction}
    >
      X
    </button>
    <div onClick={() => props.editFunction(note)}>
      {note.id} - {note.text} ({formatDate(new Date(note.lastUpdated))})
    </  div>
    </div>
}

export default Note;