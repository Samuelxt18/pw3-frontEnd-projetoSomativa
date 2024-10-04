import styles from './Select.module.css'

function Select({name,text}) {
    return(
        <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}>
        <option> Selecione uma tarefa</option>
        <option> Exercio fisico</option>
        <option> Alimentação </option>
        <option> Estudos </option>
        </select>
        </div>
    )
}

export default Select