import { useState , MouseEvent} from "react";
import { NoItems } from "./NoItems";
import style from  "./Tasks.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { Items } from "./Items";
import { v4 as uuidv4 } from 'uuid';

interface Ivalue {
    target: {
        value:string;
    }
}
interface Item {
    id: string;
    title: string;
    isComplete: boolean;
  }

export function Tasks(){
    const [numberOfTalksCreated, setNumberOfTalksCreated] =useState(0);
    const [valueInput, setValueInput] = useState("");
    const [itemArray, setItemArray] = useState<Item[]>([]);
    const [completedTasks, setCompletedTasks] = useState(0);

    const isTasksGreaterThanZero = numberOfTalksCreated > 0 ;
    
    const handleChangeInput = (event: Ivalue)=> {
        const valuetext = event.target.value;
        setValueInput(valuetext);
      };

    const handleClickRemoveId =(id: string)=>{
        const findItemRemovedFromTheCheckbox = itemArray.find(item => item.id === id);

        setItemArray(prevArray => prevArray.filter(item => item.id !== id));
        setNumberOfTalksCreated(prevTask => prevTask - 1);
    
        if (findItemRemovedFromTheCheckbox && findItemRemovedFromTheCheckbox.isComplete === true) {
            setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1);
        }
    }
    
    const handleClickCompleteId = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const isComplete = event.target.checked;
    
        // Atualiza o número de tarefas concluídas antes de atualizar o array
        if (isComplete) {
            setCompletedTasks(prevCompletedTasks => prevCompletedTasks + 1);
        } else {
            setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1);
        }
    
        // Atualiza o array de itens sem remover nenhum item
        setItemArray(prevArray => prevArray.map(item => {
            if (item.id === id) {
                return {...item, isComplete: isComplete};
            } else {
                return item; // Mantém os itens inalterados se não corresponderem ao id
            }
            
        }));
    }

    const handleClickTaskCreation = (event: React.FormEvent<HTMLFormElement>): void =>{
        event.preventDefault();

        const newItem = {
            id: uuidv4(),
            title: valueInput,
            isComplete: false
        }
        setItemArray(prevArray => [...prevArray, newItem]);
        setNumberOfTalksCreated(prevTask => prevTask + 1);
        setValueInput("");
    }


    return (
    <main className={style.main}>
        <header className={style.headerCreate}>
            <form onSubmit={handleClickTaskCreation} className={style.form}>
                <input type="text" className={style.inputCreate}  value={valueInput}  onChange={handleChangeInput} placeholder="Adicione uma nova tarefa"/>
                <button className={style.btCreate} type="submit">Criar <span> <FaPlusCircle /> </span></button>
            </form>
        </header>
        <section className={style.sectionMain}>
            <div className={style.task}>
                <h1>Tarefas Criadas <span>{numberOfTalksCreated}</span></h1>
                <p>Concluídas <span>{completedTasks} de {numberOfTalksCreated}</span></p>
            </div>
            {isTasksGreaterThanZero ? itemArray.map(item =>(
                <Items 
                key={item.id} 
                itemArray={item} 
                handleClickRemoveId={handleClickRemoveId}
                handleClickCompleteId={handleClickCompleteId}
                />
            ))  : <NoItems/> }
            
        </section>
        <footer className={style.footer}>
            <p>© 2024 Todos os direitos reservados. Desenvolvido por Marcelo Borges (Ignite Challenge).</p>
        </footer>
    </main>
    );
}