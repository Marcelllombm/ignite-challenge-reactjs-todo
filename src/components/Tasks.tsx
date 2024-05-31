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



export function Tasks(){
    const [task, setTask] =useState(0);
    const [value, setValue] = useState("");
    const [itemArray, setItemArray] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);
    
    const handleChange = (event: Ivalue)=> {
        const valuetext = event.target.value;
        setValue(valuetext);
      };

    const handleClickRemoveId =(id)=>{
         // Encontre o item que será removido do checkbox
        const itemToRemove = itemArray.find(item => item.id === id);

        setItemArray(prevArray => prevArray.filter(item => item.id !== id));
        setTask(prevTask => prevTask - 1);
     

        if (itemToRemove && itemToRemove.isComplete === true) {
            setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1);
        }

        
    }
    
    const handleClickCompleteId = (id, event) => {
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

    const handleClick = (event: MouseEvent) =>{
        event.preventDefault();

        const newItem = {
            id: uuidv4(),
            title: value,
            isComplete: false
        }
    
    
        setItemArray(prevArray => [...prevArray, newItem]);
        setTask(prevTask => prevTask + 1);
        setValue("");

       
    }

  
    return (
    <main className={style.main}>
        <header className={style.headerCreate}>
            <form onSubmit={handleClick} className={style.form}>
                <input type="text" className={style.inputCreate}  value={value}  onChange={handleChange} placeholder="Adicione uma nova tarefa"/>
                <button className={style.btCreate} type="submit">Criar <span> <FaPlusCircle /> </span></button>
            </form>
        </header>
        <section className={style.sectionMain}>
            <div className={style.task}>
                <h1>Tarefas Criadas <span>{task}</span></h1>
                <p>Concluídas <span>{completedTasks} de {task}</span></p>
            </div>
            {task > 0 ? itemArray.map(item =>(
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