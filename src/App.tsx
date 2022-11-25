import { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidV4 } from "uuid";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { InputText } from "./components/InputText";
import { Counter } from "./components/Counter";
import { Task } from "./components/Task";
import { EmptyTask } from "./components/EmptyTask";

import "./styles/main.css";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (!description.trim()) return;

    const id = uuidV4();
    const newTask = {
      id,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setDescription("");
  }

  function handleCompletedChange(id: string) {
    setTasks((tasks) => {
      return tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      });
    });
  }

  function handleDeleteTask(id: string) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="">
      <Header />
      <div className="w-full mx-auto md:w-[736px] px-4">
        <form className="flex gap-2 -mt-[25.195px]" onSubmit={handleAddTask}>
          <InputText
            placeholder="Adicione uma nova tarefa"
            className="flex-1"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Button className="my-[2px]">
            Criar <PlusCircle size={16} weight="bold" />
          </Button>
        </form>
        <div className="mt-16 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Counter label="Tarefas criadas" count={tasks.length} />
            <Counter
              type="secondary"
              label="Concluídas"
              count={
                tasks.length &&
                `${tasks.filter((task) => task.completed).length} de ${
                  tasks.length
                }`
              }
            />
          </div>

          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={handleDeleteTask}
              onCompletedChange={handleCompletedChange}
            />
          ))}

          {tasks.length === 0 && <EmptyTask />}
        </div>
      </div>
    </div>
  );
}

export default App;
