import styles from "./styles.module.css";

import trashImg from "../../assets/trash.svg";

interface TaskProps {
  id: string;
  description: string;
  checked: boolean;
  onDeleteTask: (id: string) => void;
  onToggleCheckTask: (id: string) => void;
}

export function Task({
  id,
  description,
  checked,
  onDeleteTask,
  onToggleCheckTask,
}: TaskProps) {
  return (
    <li className={styles.task}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onToggleCheckTask(id)}
      />
      <label htmlFor={id} />

      <span>{description}</span>

      <button onClick={() => onDeleteTask(id)}>
        <img src={trashImg} alt="Ícone de lixeira" />
      </button>
    </li>
  );
}
