import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./Items.module.css";

export function Items(props){

    return (
        <div className={style.mainitems}>
           <input type="checkbox" id={props.itemArray.id} name={props.itemArray.title} onChange={(event)=> props.handleClickCompleteId(props.itemArray.id, event)}/>
            <label htmlFor={props.itemArray.id}
            className={props.itemArray.isComplete ? style.completed : ''}
            >{props.itemArray.title}</label>
            <button onClick={()=> props.handleClickRemoveId(props.itemArray.id)}><RiDeleteBin5Line size={16} style={{color:"#808080" }} /></button>
        </div>
    );
}