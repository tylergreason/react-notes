import {formatDate} from '../../Common/helperFunctions';

function Note(props:any) {    
  return <div>
    <button
      onClick={props.deleteFunction}
    >
      X
    </button>
      {props.note.text} {formatDate(new Date(props.note.lastUpdated))}
    </div>
}

export default Note;