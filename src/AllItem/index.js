import { CompleteIcon } from '../AllIcon/CompleteIcon';
import { DeleteIcon } from '../AllIcon/DeleteIcon';
import './AllItem.css';

function AllItem(props) {
  return (
    <li className="AllItem">
      <CompleteIcon 
      completed={props.completed}
      onComplete={props.onComplete}
      />

      <p className={`AllItem-p ${props.completed && 
        "AllItem-p--complete"}`}>{props.text}</p>
        
        <DeleteIcon 
        onDelete={props.onDelete}/>

    </li>
  );
}

export { AllItem };