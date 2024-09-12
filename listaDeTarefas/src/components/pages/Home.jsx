import React from "react";

import style from './Home.Module.css';

const Home = () =>{
    return(
        <section className={style.home_container}>
            <h1>Bem vindo a sua <span>LISTA DE TAREFAS</span></h1>
            <p>sua plataforma web de lista!</p>
            <img src="./listpng.png" />
        </section>
    )
}

export default Home