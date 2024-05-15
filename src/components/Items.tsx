import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./Items.module.css";

export function Items(props){
    console.log(props)
    return (
        <div className={style.mainitems}>
            <input type="checkbox" id="01" name="01-tarefa" />
            <label htmlFor="01">{props.itemArray.title}</label>
            <button><RiDeleteBin5Line size={16} style={{color:"#808080" }} /></button>
        </div>
    );
}