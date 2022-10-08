import styles from "./styles.module.css";

import plusImg from "../../assets/plus.svg";
import { FormEvent, useState } from "react";

interface NewTaskFormProps {
  onCreateNewTask: (description: string) => void;
}

export function NewTaskForm({ onCreateNewTask }: NewTaskFormProps) {
  const [description, setDescription] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateNewTask(description);

    setDescription('');
  }

  return (
    <form
      className={styles.newTaskInputContainer}
      onSubmit={handleCreateNewTask}
    >
      <input
        placeholder="Adiciona uma nova tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">
        Criar
        <img src={plusImg} alt="Ícone de adição" />
      </button>
    </form>
  );
}
