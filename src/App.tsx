import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Task } from "./components/Task";

import styles from "./styles/app.module.css";

interface Task {
  id: string;
  description: string;
  checked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createNewTask(description: string) {
    const newTask: Task = {
      id: new Date().toISOString(),
      description,
      checked: false,
    };

    setTasks((state) => [...state, newTask]);
  }

  function deleteTask(id: string) {
    setTasks((state) => state.filter((task) => task.id !== id));
  }

  function toggleCheckTask(id: string) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: !task.checked,
          };
        }

        return task;
      })
    );
  }

  const completedTasks: number = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1;
    }
    
    return acc;
  }, 0);
  
  const totalTasks: number = tasks.length;
  
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <NewTaskForm onCreateNewTask={createNewTask} />

        <div className={styles.taskInfo}>
          <div>
            Tarefas criadas
            <span>{totalTasks}</span>
          </div>

          <div>
            Concluídas
            <span>
              {completedTasks} de {totalTasks}
            </span>
          </div>
        </div>

        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              checked={task.checked}
              onDeleteTask={deleteTask}
              onToggleCheckTask={toggleCheckTask}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
