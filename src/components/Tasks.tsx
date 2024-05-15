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

 console.log(itemArray)

    const handleChange = (event: Ivalue)=> {
        const valuetext = event.target.value;
        setValue(valuetext);
      };
    
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
                <h1>Tarefas Criadas <span>0</span></h1>
                <p>Concluídas <span>0 de 05</span></p>
            </div>
            {task > 0 ? itemArray.map(item =>(
                <Items key={item.id} itemArray={item} />
            ))  : <NoItems/> }
            
        </section>
        <footer className={style.footer}>
            <p>© 2024 Todos os direitos reservados. Desenvolvido por Marcelo Borges (Ignite Challenge).</p>
        </footer>
    </main>
    );
}