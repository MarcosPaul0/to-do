import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Task } from "./components/Task";

import styles from "./styles/app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <NewTaskForm />

        <div className={styles.taskInfo}>
          <div>
            Tarefas criadas
            <span>
              3
            </span>
          </div>

          <div>
            Concluídas
            <span>
              2 de 3
            </span>
          </div>
        </div>

        <ul>
          <Task />
          <Task />
          <Task />
        </ul>
      </main>
    </div>
  );
}
