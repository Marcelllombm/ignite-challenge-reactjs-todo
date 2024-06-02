import React from 'react';
import style from  "./Task.module.css"

export function Task(){
    return (
    <main className={style.main}>
        <header>
            <form action="">
                <input type="text" />
                <button className={style.buttonEnviar}>Criar</button>
            </form>
        </header>
        <section>
            <div>
                <h1>Tarefas Criadas</h1>
                <p>Concluídas</p>
            </div>
        </section>
        <footer>
            <p>© 2024 Todos os direitos reservados. Desenvolvido por Marcelo Borges (Ignite).</p>
        </footer>
    </main>
    );
}