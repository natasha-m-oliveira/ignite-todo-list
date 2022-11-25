import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { InputText } from "./components/InputText";
import { PlusCircle } from "phosphor-react";
import "./styles/main.css";
import { Counter } from "./components/Counter";
import { useState } from "react";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([1, 2, 3]);
  return (
    <div className="">
      <Header />
      <div className="w-full mx-auto md:w-[736px] px-4">
        <div className="flex gap-2 -mt-[25.195px]">
          <InputText
            placeholder="Adicione uma nova tarefa"
            className="flex-1"
          />
          <Button>
            Criar <PlusCircle size={16} weight="bold" />
          </Button>
        </div>
        <div className="mt-16 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Counter label="Tarefas criadas" count={0} />
            <Counter type="secondary" label="Concluídas" count={0} />
          </div>

          {tasks.map((item) => (
            <Task key={item} />
          ))}

          {/* {tasks.length === 0 && } */}
        </div>
      </div>
    </div>
  );
}

export default App;
