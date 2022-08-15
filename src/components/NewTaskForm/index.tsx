import styles from "./styles.module.css";

import plusImg from "../../assets/plus.svg";

export function NewTaskForm() {
  return (
    <form className={styles.newTaskInputContainer}>
      <input placeholder="Adiciona uma nova tarefa" />
      <button type="submit">
        Criar
        <img src={plusImg} alt="Ícone de adição" />
      </button>
    </form>
  );
}
