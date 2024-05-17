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


    const handleChange = (event: Ivalue)=> {
        const valuetext = event.target.value;
        setValue(valuetext);
      };

    const handleClickRemoveId =(id)=>{
        setItemArray(prevArray => prevArray.filter(item => item.id !== id));
        setTask(prevTask => prevTask - 1);
    }
    
    const handleClickCompleteId = (id) => {
        setItemArray(prevArray => prevArray.map(item => item.id === id ? {...item, isComplete: !item.isComplete} : item));
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

    console.log(itemArray)
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
                <p>Concluídas <span>0 de {task}</span></p>
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