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
            name='txt_tarefa'
            placeHolder='digite sua tarefa'
            text='Tarefa'
        />

        <Input
            type='text'
            name='txt_datTare'
            placeHolder='digite quando ira ser realizada'
            text='Data da tarefa'
        />

        <Input
            type='text'
            name='txt_descricao_tarefa'
            placeHolder='digite a descriçao da tarefa'
            text='Descrição da tarefa'
        />

        <Select
            name='categoria'
            text='Escolha uma categoria da tarefa'
        />

        <Button
            rotulo='Cadastrar Tarefa'
        />

        </section>
    )
}

export default CreateList