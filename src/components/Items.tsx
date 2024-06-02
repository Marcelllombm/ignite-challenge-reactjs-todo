import { RiDeleteBin5Line } from "react-icons/ri";
import style from "./Items.module.css";

interface Item {
    id: string;
    title: string;
    isComplete: boolean;
}

interface ItemsProps {
    itemArray: Item;
    handleClickCompleteId: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickRemoveId: (id: string) => void;
}

export function Items({itemArray,handleClickCompleteId,handleClickRemoveId}: ItemsProps){

    return (
        <div className={style.mainitems}>
           <input type="checkbox" id={itemArray.id} name={itemArray.title} onChange={(event)=> handleClickCompleteId(itemArray.id, event)}/>
            <label htmlFor={itemArray.id}
            className={itemArray.isComplete ? style.completed : ''}
            >{itemArray.title}</label>
            <button onClick={()=> handleClickRemoveId(itemArray.id)}><RiDeleteBin5Line size={16} style={{color:"#808080" }} /></button>
        </div>
    );
}