import React from "react";
import style from './CreateList.module.css'
import Input from "../forms/Input";
import Select from '../forms/Select'
import Button from "../forms/Button";

const CreateList = () =>{

    return(

        <section className={style.CreateList_container}>

        <h1>Cadastro de Tarefas</h1>

        <Input
            type='text'
            name='txt_livro'
            placeHolder='digite o nome do seu livro aqui'
            text='Titulo do livro'
        />

        <Input
            type='text'
            name='txt_autor'
            placeHolder='digite o numero do ator'
            text='Nome do ator'
        />

        <Input
            type='text'
            name='txt_descricao_livro'
            placeHolder='digite a descriçao do livro'
            text='Descrição do livro'
        />

        <Select
            name='categoria'
            text='Escolha uma categoria de livro'
        />

        <Button
            rotulo='Cadastrar Livro'
        />

        </section>
    )
}

export default CreateList