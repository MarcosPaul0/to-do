import styles from "./styles.module.css";

import trashImg from "../../assets/trash.svg";

export function Task() {
  return (
    <li className={styles.task}>
      <input type="checkbox" id="checkboxTask" />
      <label htmlFor="checkboxTask" />

      <span>Integer urna interdum m</span>

      <button>
        <img src={trashImg} alt="Ícone de lixeira" />
      </button>
    </li>
  );
}
