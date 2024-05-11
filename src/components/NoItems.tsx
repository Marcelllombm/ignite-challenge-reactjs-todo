import style from "./NoItems.module.css";
import clipboard from "../assets/Clipboard.svg";

export function NoItems (){
    return(
        <div className={style.noitems}>
            <img src={clipboard}  alt="icone task" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    );
}