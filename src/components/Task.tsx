import { useState } from "react";
import { NoItems } from "./NoItems";
import style from  "./Task.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { Items } from "./Items";

export function Task(){
    const [task, setTask] =useState(1);

    return (
    <main className={style.main}>
        <header className={style.headerCreate}>
            <form action="" className={style.form}>
                <input type="text" className={style.inputCreate} placeholder="Adicione uma nova tarefa"/>
                <button className={style.btCreate}>Criar <span> <FaPlusCircle /> </span></button>
            </form>
        </header>
        <section className={style.sectionMain}>
            <div className={style.task}>
                <h1>Tarefas Criadas <span>0</span></h1>
                <p>Concluídas <span>0 de 05</span></p>
            </div>
            {task > 0 ? <Items/> : <NoItems/> }
            
        </section>
        <footer className={style.footer}>
            <p>© 2024 Todos os direitos reservados. Desenvolvido por Marcelo Borges (Ignite Challenge).</p>
        </footer>
    </main>
    );
}